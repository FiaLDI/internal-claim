# internal-claim

## Backend
```
uvicorn src.main:app --reload
```

## Frontend
```
npm run dev
```

## Build
```
docker compose up --build
```

## Down
all
```
docker compose down -v
```
```
docker compose down
```

## Available Service

| Service     | Address                                                    |
| ----------- | ---------------------------------------------------------- |
| Frontend    | [http://localhost:3000](http://localhost:3000)             |
| Backend API | [http://localhost:8000](http://localhost:8000)             |
| Swagger UI  | [http://localhost:8000/docs](http://localhost:8000/docs)   |
| ReDoc       | [http://localhost:8000/redoc](http://localhost:8000/redoc) |
