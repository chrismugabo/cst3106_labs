 # Hospital Triage Design Documentation

## Overview
The **Hospital Triage App** is a web-based application designed to streamline emergency room operations by managing patient records, estimating wait times, and prioritizing injury severity for efficient review by administrators. This document outlines the visual and functional components of the app, ensuring a consistent, user-friendly, and responsive design.

---

## Fonts

### Fonts Used
- **Headings**: `'Roboto', sans-serif`
- **Subheadings and Body Text**: `'Open Sans', sans-serif`

### Font Weights
- **Headings**: Bold (700)
- **Subheadings**: Semi-bold (600)
- **Body Text**: Regular (400)

### Rationale
The selected fonts provide a clean, modern aesthetic with high readability and accessibility. The sans-serif fonts are professional and align with the healthcare industry standards.

---

## Colour Palette

### Colour Scheme
1. **Primary Color**: `#005a87` (Blue)  
   Represents trust and reliability, used for headers and primary actions.
2. **Secondary Color**: `#4CAF50` (Green)  
   Symbolizes progress and success, used for buttons and positive messages.
3. **Alert Color**: `#FF5722` (Red)  
   Highlights critical information and error messages.
4. **Background Color**: `#FAFAFA` (Light Gray)  
   Creates a neutral and clean background for content.
5. **Text Color**: `#333333` (Dark Gray)  
   Ensures high contrast and readability.

---

## App Components

### Titles
- **User Page Title**: "Hospital Triage - User"
- **Admin Page Title**: "Hospital Triage - Admin"

#### Design
- **Font**: `'Roboto', sans-serif`, Bold (700)  
- **Size**: 32px  
- **Alignment**: Centered  

---

### Buttons
- **User Submit Button**: Green (`#4CAF50`) with white text.  
- **Admin Action Button**: Red (`#FF5722`) with white text.

#### Design
- **Shape**: Rounded corners (8px radius)  
- **Size**: 44px height, 120px width  
- **Font**: `'Open Sans', sans-serif`, Semi-bold (600)  
- **Hover Effect**: Subtle shadow and darker background tone  

---

### Input Fields
- **Border Color**: Light Gray (`#DDDDDD`), turns Blue (`#005a87`) on focus.  
- **Font**: `'Open Sans', sans-serif`, Regular (400)  
- **Padding**: 10px  

---

## Layout and Navigation

### Wireframe
#### User Page
- **Header**: Includes the app title and a role selector dropdown.
- **Main Section**: Contains the patient form to check wait times.
- **Footer**: Displays copyright information.

#### Admin Page
- **Header**: Includes the app title and a logout button.
- **Main Section**:
  - **Patient Table**: Displays patient information (code, name, severity, wait time, arrival time).
  - **Add Patient Form**: Allows administrators to add new patients.
  - **Refresh Button**: Reloads the patient queue.

---

## Responsive Design

### Breakpoints
1. **Desktop (Default)**: Full-width sections with centered content.  
2. **Tablet (768px)**: Reduced padding; stacked layout for forms and tables.  
3. **Mobile (600px)**: Full-width content with increased font sizes for readability.

### Adjustments
- **Buttons**: Stretch to full width on mobile devices.
- **Table**: Horizontal scrolling enabled for small screens.
- **Forms**: Input fields stack vertically for easy interaction.

---

## Functionality

### How the App Works for Admin and Patient

#### Admin Perspective
1. **Login and Access**:
   - Admins access their portal by logging in using credentials (if authentication is implemented in future enhancements).
   - Upon successful login, they are redirected to the **Admin Dashboard**.

2. **Dashboard Components**:
   - **Patient Table**:
     - Displays the list of all patients with their details: code, name, severity level, wait time, and arrival time.
     - Automatically updates wait times dynamically based on changes in the queue.
   - **Add Patient Form**:
     - Admins can input a new patient’s details (name, severity level, and arrival time).
     - The system calculates the wait time based on the severity level and other patients in the queue.
   - **Delete Patient Action**:
     - Admins can remove a patient from the queue once their case is addressed.
     - The wait times for other patients are recalculated dynamically to reflect the updated queue.
   - **Refresh Button**:
     - Allows admins to manually refresh the patient list to fetch the latest updates from the server.

3. **API Operations**:
   - Admins can perform CRUD operations using the app's RESTful API:
     - **GET**: Retrieve the current patient queue.
     - **POST**: Add a new patient to the queue.
     - **DELETE**: Remove a patient based on their ID.

#### Patient Perspective
1. **Access and Interaction**:
   - Patients access the **User Page** directly without requiring login credentials.
   - They see a form with input fields for their **name** and **unique patient code**.

2. **Checking Wait Time**:
   - Patients enter their details (name and code) into the form.
   - Upon submitting the form, the app sends a **GET request** to the API endpoint `/patients/:code`.
   - The server responds with the patient’s estimated wait time based on the current queue and their severity level.

3. **User Feedback**:
   - The app displays the estimated wait time in a clear and user-friendly format.
   - If the patient code is not found, an error message (styled with the **Alert Color**) informs the user to check their details and try again.

4. **Real-Time Updates**:
   - The app ensures that the displayed wait time is always up-to-date by retrieving data directly from the server.

---

## Technical Details

### API Integration
- **Endpoints**:
  - `/patients` (GET, POST)
  - `/patients/:id` (DELETE)
  - `/patients/:code` (GET)

---

## Testing and Validation

- **Cross-Browser Compatibility**: Tested on Chrome, Firefox, and Edge.  
- **Accessibility**: Follows WCAG standards for color contrast and keyboard navigation.  
- **Performance**: Optimized queries to ensure smooth operation with high patient loads.  

---

## Future Enhancements
- **Multilingual Support**: Add translations for French and Spanish.
- **Authentication**: Role-based access with detailed admin logs.
- **Data Export**: Ability to export patient data in CSV format.

---

This design system ensures the **Hospital Triage App** remains functional, visually appealing, and user-friendly, facilitating efficient emergency room management.
