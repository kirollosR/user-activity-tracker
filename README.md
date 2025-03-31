# User Activity Tracker
A scalable event-driven microservice using Node.js, Kafka, and MongoDB.

## Architecture
- **Producer**: Sends user activity events to Kafka.
- **Consumer**: Processes events and stores them in MongoDB.
- **API**: Queries logs with pagination/filtering.
- **DDD**: Organized around the "User Activity" domain.

## Setup
1. Install Docker and Kubernetes.
2. Run `docker-compose up` for local Kafka/MongoDB.
3. Deploy to Google Cloud using `kubectl apply -f k8s/`.