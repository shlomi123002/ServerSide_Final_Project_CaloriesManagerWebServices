// David Tal, 207146218
// Shlomi Cohen, 318502069
// Bechor Eran Babayov, 318655453

import express from "express";

const router = express.Router();

// Define the home page route
router.get('/', (req, res) => {
    const pageTitle = 'Welcome to Eran, Shlomi and David Final Server Side Project :)';
    res.send(pageTitle); // Send plain text response
});

// Export the router to make it available to other files
export default router;
