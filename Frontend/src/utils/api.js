const API_BASE_URL = 'http://localhost:8080';

export const api = {
    // Authentication endpoints
    login: async (email, password) => {
        const response = await fetch(`${API_BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        return response.json();
    },

    register: async (userData) => {
        const response = await fetch(`${API_BASE_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        return response.json();
    },

    // Book endpoints
    getBooks: async () => {
        const response = await fetch(`${API_BASE_URL}/books`);
        return response.json();
    },

    getBookById: async (id) => {
        const response = await fetch(`${API_BASE_URL}/books/${id}`);
        return response.json();
    },

    addBook: async (bookData) => {
        const response = await fetch(`${API_BASE_URL}/books`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookData),
        });
        return response.json();
    },

    updateBook: async (id, bookData) => {
        const response = await fetch(`${API_BASE_URL}/books/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookData),
        });
        return response.json();
    },

    deleteBook: async (id) => {
        const response = await fetch(`${API_BASE_URL}/books/${id}`, {
            method: 'DELETE',
        });
        return response.json();
    },

    // Student endpoints
    getStudents: async () => {
        const response = await fetch(`${API_BASE_URL}/students`);
        return response.json();
    },

    getStudentById: async (id) => {
        const response = await fetch(`${API_BASE_URL}/students/${id}`);
        return response.json();
    },

    addStudent: async (studentData) => {
        const response = await fetch(`${API_BASE_URL}/students`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(studentData),
        });
        return response.json();
    },

    updateStudent: async (id, studentData) => {
        const response = await fetch(`${API_BASE_URL}/students/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(studentData),
        });
        return response.json();
    },

    deleteStudent: async (id) => {
        const response = await fetch(`${API_BASE_URL}/students/${id}`, {
            method: 'DELETE',
        });
        return response.json();
    },
}; 
 