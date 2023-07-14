# Foto do Projeto
    INICIO
<img src="fotoDoProjeto1.PNG" width="800" /> 

    Favorito
<img src="fotoDoProjeto2.PNG" width="800" /> 

    POST/1
<img src="fotoDoProjeto3.PNG" width="800" /> 
# Rotas aninhamento - dinamico

# My JSON server

criar um arquivo json

    https://my-json-server.typicode.com/


pesquisa

        useEffect(()=>{
            fetch(
            `https://my-json-server.typicode.com/italo-lopes/banco-tela-cinema/video?id=${param.id}`
            ).then(
                res=>res.json()
            ).then(
                res=>{setVideo(...res)}
            )
        },[param.id])



busca geral

            const [video,setVideo] = useState([])

            useEffect(()=>{
                fetch('https://my-json-server.typicode.com/italo-lopes/banco-tela-cinema/video')
                .then(resp=>resp.json()).then(resp=>{
                    setVideo(resp)
                })
            },[])

# OBJ

    Fazer upload de um protótipo de API no Github;

    Hospedar o protótipo de API no My Json Server;

    Consumir APIs com o FetchAPI;
# Dependecias

    npm install react-router-dom@6

pagina public --- imagem dinamica 

src ou na proria  pasta resto estatico

ponto em comum pros diretorio

        {
            "compilerOptions": {
                "baseUrl": "src"
            },
            "include": [
                "src"
            ]
        }


como usar link dinamicos

import { NavLink, useLocation } from 'react-router-dom';

            const MenuLink = ({children, path}) => {
                //const localizar = useLocation()
                console.log(children)
                return (
                    <NavLink 
                    className={({ isActive }) => `
                    ${style.link}
                    ${isActive ? style.linkDestacado : ""}
                        `}
                        to={path}
                        end
                    > 
                        {children}
                    </NavLink>
                );
            }
            
            export default MenuLink;


principal 

        <NavLink className={({isActive})=> `${styles.link}  ${isActive? styles.ativo : ''}` } to={path} end>
            {children}
        </NavLink>

# Logicas usadas

--basico

        some() verifica se alguem passa nas consdiçoes 
        ages.some(checkAdult);

        splice
        novalista.splice(novaLisata.indexOf(novoFavorito),1) remove um elemento no index 
        
        const pega  = [...oficial]
        pega.push(novoFavorito) 


# Rotas

rotas dinamicas

         <Route path="/player/:id" element={<Player/>}> </Route>



rotads aninhada

                <Route path="/" element={<PaginaBase/>}>
                    <Route path="/" element={<Inicio/>}></Route>
                    <Route path="/favorito" element={<Favorito/>}></Route>
                    <Route path="/home" element={<Inicio/>}></Route>
                    <Route path="/player/:id" element={<Player/>}> </Route>
                    <Route path="/*" element={<NaoEncontrada/>}> </Route>
                </Route>

         <Cabecalho/>
         <FavoritoProvider>
            <Container>
                <Outlet/>
            </Container>
         </FavoritoProvider>
          <Rodape/>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
