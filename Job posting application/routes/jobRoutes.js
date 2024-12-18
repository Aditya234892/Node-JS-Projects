const express = require('express');
const router = express.Router();
const { 
  createJob, 
  getAllJobs, 
  updateJob, 
  deleteJob 
} = require('../controllers/jobController');

// Job routes
router.post('/', createJob);        
router.get('/', getAllJobs);        
router.put('/:id', updateJob);       
router.delete('/:id', deleteJob);   

module.exports = router;