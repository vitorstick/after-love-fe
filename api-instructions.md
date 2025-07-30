# After Love API Documentation

This document describes the API endpoints available for the After Love couple application frontend.

## Base URL

```
http://localhost:3000/api
```

---

## 🔐 Authentication Endpoints

### 1. User Registration

**Endpoint:** `POST /auth/register`

**Description:** Register a new user account

**Request Body:**

```typescript
{
  name: string; // Required - User's full name
  email: string; // Required - Valid email address (must be unique)
  password: string; // Required - Minimum 6 characters
}
```

**Example Request:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Success Response (201):**

```json
{
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "email": "john@example.com",
      "name": "John Doe",
      "createdAt": "2025-01-30T14:45:25.000Z",
      "updatedAt": "2025-01-30T14:45:25.000Z",
      "coupleId": null
    },
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

**Error Responses:**

- `400 Bad Request` - Validation errors (invalid email, password too short, etc.)
- `409 Conflict` - Email already exists

---

### 2. User Login

**Endpoint:** `POST /auth/login`

**Description:** Authenticate an existing user

**Request Body:**

```typescript
{
  email: string; // Required - User's email
  password: string; // Required - User's password
}
```

**Example Request:**

```json
{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Success Response (200):**

```json
{
  "message": "Login successful",
  "data": {
    "user": {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "email": "john@example.com",
      "name": "John Doe",
      "createdAt": "2025-01-30T14:45:25.000Z",
      "updatedAt": "2025-01-30T14:45:25.000Z",
      "coupleId": null
    },
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

**Error Responses:**

- `401 Unauthorized` - Invalid credentials

---

### 3. Get Current User Profile

**Endpoint:** `GET /auth/profile`

**Description:** Get the authenticated user's profile information

**Headers:**

```
Authorization: Bearer <access_token>
```

**Success Response (200):**

```json
{
  "message": "Profile retrieved successfully",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "email": "john@example.com",
    "name": "John Doe",
    "createdAt": "2025-01-30T14:45:25.000Z",
    "updatedAt": "2025-01-30T14:45:25.000Z",
    "coupleId": null
  }
}
```

**Error Responses:**

- `401 Unauthorized` - Invalid or missing token

---

## 👥 User Management Endpoints

### 4. Get All Users (Admin)

**Endpoint:** `GET /users`

**Description:** Retrieve all users (admin functionality)

**Headers:**

```
Authorization: Bearer <access_token>
```

**Success Response (200):**

```json
{
  "message": "All users retrieved successfully",
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "email": "john@example.com",
      "name": "John Doe",
      "createdAt": "2025-01-30T14:45:25.000Z",
      "updatedAt": "2025-01-30T14:45:25.000Z"
    }
  ]
}
```

---

### 5. Get User by ID

**Endpoint:** `GET /users/:id`

**Description:** Get a specific user by their ID

**Headers:**

```
Authorization: Bearer <access_token>
```

**Success Response (200):**

```json
{
  "message": "User found",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "email": "john@example.com",
    "name": "John Doe",
    "createdAt": "2025-01-30T14:45:25.000Z",
    "updatedAt": "2025-01-30T14:45:25.000Z",
    "coupleId": null
  }
}
```

**Error Responses:**

- `404 Not Found` - User not found

---

### 6. Update User Profile

**Endpoint:** `PUT /users/:id`

**Description:** Update user profile information

**Headers:**

```
Authorization: Bearer <access_token>
```

**Request Body:**

```typescript
{
  name?: string;  // Optional - User's full name
  email?: string; // Optional - Valid email address
}
```

**Example Request:**

```json
{
  "name": "John Smith",
  "email": "johnsmith@example.com"
}
```

**Success Response (200):**

```json
{
  "message": "User updated successfully",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "email": "johnsmith@example.com",
    "name": "John Smith",
    "createdAt": "2025-01-30T14:45:25.000Z",
    "updatedAt": "2025-01-30T14:45:25.000Z",
    "coupleId": null
  }
}
```

---

### 7. Update User Password (Admin)

**Endpoint:** `PATCH /users/:id/password`

**Description:** Update a user's password (admin functionality)

**Headers:**

```
Authorization: Bearer <access_token>
```

**Request Body:**

```typescript
{
  password: string; // Required - Minimum 6 characters
}
```

**Example Request:**

```json
{
  "password": "newSecurePassword123"
}
```

**Success Response (200):**

```json
{
  "message": "Password updated successfully",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000"
  }
}
```

---

## 📝 TypeScript Interfaces for Frontend

### User Interface

```typescript
interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  coupleId: string | null;
}
```

### Authentication Response

```typescript
interface AuthResponse {
  message: string;
  data: {
    user: User;
    access_token: string;
  };
}
```

### API Response (Generic)

```typescript
interface ApiResponse<T> {
  message: string;
  data: T;
}
```

### Registration/Login Request

```typescript
interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

interface LoginRequest {
  email: string;
  password: string;
}
```

### Update User Request

```typescript
interface UpdateUserRequest {
  name?: string;
  email?: string;
}

interface UpdatePasswordRequest {
  password: string;
}
```

---

## 🔧 Validation Rules

### Registration

- **name**: Required, must be a string
- **email**: Required, must be valid email format, must be unique
- **password**: Required, minimum 6 characters

### Login

- **email**: Required, must be valid email format
- **password**: Required

### Update User

- **name**: Optional, must be a string if provided
- **email**: Optional, must be valid email format if provided

### Update Password

- **password**: Required, minimum 6 characters

---

## 🔑 Authentication

All protected endpoints require a JWT token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

The token is returned from the login and registration endpoints and should be stored securely on the frontend (e.g., in localStorage or a secure cookie).

---

## 🚨 Error Handling

All endpoints return errors in this format:

```json
{
  "statusCode": 400,
  "message": "Validation failed",
  "error": "Bad Request"
}
```

Common HTTP status codes:

- `200` - Success
- `201` - Created
- `400` - Bad Request (validation errors)
- `401` - Unauthorized (invalid credentials or token)
- `404` - Not Found
- `409` - Conflict (email already exists)
- `500` - Internal Server Error
