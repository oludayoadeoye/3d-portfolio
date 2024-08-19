

credit from this tutorial
[Final code](https://github.com/wass08/r3f-wawatmos-part-1)

![alt text](3dportfolio.gif)
### 3D Model credits[text](../../../../../..)

Cloud by Poly by Google [CC-BY](https://creativecommons.org/licenses/by/3.0/) via Poly Pizza (https://poly.pizza/m/44cGXp6_8WD)

Airplane by Poly by Google [CC-BY](https://creativecommons.org/licenses/by/3.0/) via Poly Pizza (https://poly.pizza/m/8VysVKMXN2J)

[Starter pack](https://github.com/wass08/r3f-wawatmos-starter)

# Step 1: Build the Docker image
docker build -t dayo-3d-portfolio .

# Step 2: Tag the Docker image
docker tag dayo-3d-portfolio oludayoadeoye/dayo-3d-portfolio:latest

# Step 3: Log in to Docker Hub
docker login

# Step 4: Push the Docker image
docker push oludayoadeoye/dayo-3d-portfolio:latest


docker run -p 3000:3000 oludayoadeoye/dayo-3d-portfolio:latest
