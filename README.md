# React Router Dom v6 Nested Route Bug

This repository demonstrates a common issue encountered when using nested routes in React Router Dom v6.  The problem involves a catch-all route (`/*`) unintentionally overriding nested routes, preventing them from rendering correctly.

The `App.js` file contains the buggy implementation.  The `AppSolution.js` file provides a corrected version.

## Bug Description

The catch-all route, intended to handle 404 errors, is incorrectly matching all routes, masking the nested routes.  This leads to the NotFound component being rendered even when navigating to valid nested paths.

## Solution

The solution involves restructuring the routes to ensure that the catch-all route only matches when no other routes are matched. This is typically achieved through the order of route definitions within the `Routes` component.