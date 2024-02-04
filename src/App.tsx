import { Grid, GridItem, chakra } from "@chakra-ui/react"
import NavBar from "./Components/NavBar"

function App() {
  

  return (
    <Grid>
      <GridItem>
        <NavBar></NavBar>
      </GridItem>
      <GridItem>
         side
      </GridItem>
      <GridItem>
         Main
      </GridItem>
    </Grid>
  )
}

export default App
