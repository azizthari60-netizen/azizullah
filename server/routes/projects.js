const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// GET /api/projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json({ success: true, projects });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// POST /api/projects (admin/secure use)
router.post('/', async (req, res) => {
  const { title, description, techStack, previewUrl, repoUrl, imageUrl } = req.body;

  if (!title || !description) {
    return res.status(400).json({ success: false, message: 'Title and description are required.' });
  }

  try {
    const project = new Project({ title, description, techStack, previewUrl, repoUrl, imageUrl });
    await project.save();
    res.status(201).json({ success: true, project });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
