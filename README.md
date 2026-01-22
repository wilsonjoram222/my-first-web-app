# BizyShops - React Fullstack Project

A full-stack web application for managing products built with React, Node.js, Express, and PostgreSQL.

## Project Structure

```
website/
├── server/
│   ├── bizyshops/         # React frontend
│   ├── index.js           # Express server
│   ├── db.js              # PostgreSQL connection
│   ├── database.sql       # Database schema
│   └── package.json
├── client/                # Additional client folder (optional)
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js and npm
- PostgreSQL database
- Git

### Backend Setup

1. Navigate to the server directory:
```bash
cd server
npm install
```

2. Configure database connection in `db.js`:
```javascript
const pool = new Pool({
  user: "postgres",
  password: "your_password",
  host: "localhost",
  port: 5432,
  database: "website"
});
```

3. Create the database and tables:
```bash
psql -U postgres -d website -f database.sql
```

4. Start the backend server:
```bash
node index.js
```
Server runs on `http://localhost:5000`

### Frontend Setup

1. Navigate to the React app directory:
```bash
cd server/bizyshops
npm install
```

2. Start the React development server:
```bash
npm start
```
Frontend runs on `http://localhost:3000`

## Features

- **Create Products**: Add new products with name, description, price, and stock quantity
- **View Products**: Display all products in a table format
- **Update Products**: Edit product information
- **Delete Products**: Remove products from inventory

## API Endpoints

- `GET /products` - Fetch all products
- `GET /products/:id` - Fetch a specific product
- `POST /products` - Create a new product
- `PUT /products/:id` - Update a product
- `DELETE /products/:id` - Delete a product

## Technologies Used

- **Frontend**: React 19, React Scripts, CSS3
- **Backend**: Node.js, Express 5
- **Database**: PostgreSQL
- **Others**: CORS, Bootstrap 5

## Troubleshooting

### CORS Issues
Make sure the Express server has CORS enabled for `http://localhost:3000`

### Database Connection
Verify PostgreSQL is running and credentials in `db.js` are correct

### Port Conflicts
- Backend: Port 5000
- Frontend: Port 3000

## Fixed Issues

- ✅ Removed problematic `window.location = ""` redirect in CreateProducts
- ✅ Renamed `componets` folder to `components`
- ✅ Updated import paths in App.js
- ✅ Added .gitignore to exclude node_modules

## License

ISC

## Author

wilsonjoram222
