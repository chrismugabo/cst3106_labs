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

## Technical Details

### Functionality
1. **Admin View**:  
   - View, add, and delete patients.  
   - Automatically updates patient wait times upon deletion.  

2. **User View**:  
   - Enter name and code to fetch estimated wait time.  

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
