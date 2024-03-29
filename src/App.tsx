import { Grid, GridItem, Show, chakra } from "@chakra-ui/react"
import NavBar from "./Components/NavBar"
import Main from "./Components/Main"
import Apii from "./service/Apii"
//import aside from "./Components/aside"


function App() {
  

  return (
    <Grid templateAreas={{
      base: `"nav' ' main"`,
      lg: `'nav nav' 'aside main'`
    }}>
      <GridItem area='nav'>
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area='aside' >
          <Apii></Apii>
      </GridItem>
      </Show>
      <GridItem area='main'>
         <Main></Main>
      </GridItem>
    </Grid>
  )
}

export default App
