# gh-react-vite

- Crear carpeta .github
- dentro crear una carpeta que se llamara workflows
- Archivo deploy.yml

```
name: Build and Deploy # Nombre del workflow
on: [push] # Se va a ejecutar cuando se haga un push al repositorio remoto
jobs:
  build-and-deploy: # Tareas que se van a ejecutar
    runs-on: ubuntu-latest # Ultima version de ubutu
    steps: # Pasos
      - name: Checkout 🛎️ # Checkout es parte de los actions, para analizar el repositorio
        uses: actions/checkout@v2.3.1

      - name: Install and Build 🔧 # This example project is built using npm and outputs the result to the 'build' folder. Replace with the commands required to build your project, or remove this step entirely if your site is pre-built.
        run: |
          npm install
          npm run build

      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@4.1.7
        with:
          branch: gh-pages # The branch the action should deploy to.
          folder: build # The folder the action should deploy.
```
