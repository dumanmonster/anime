import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'
import { Box, Grid } from '@mui/material'
import './App.css';
import Body from './components/Body'
import Header from './components/Header'

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://graphql.anilist.co"
  })
  return (

    <ApolloProvider client={client}>
      <div style={{ backgroundColor: "#E5E5E5", width: "100%", height: "100vh" }}>
        <Grid container >

          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12}>
            <Body />
          </Grid>
          <Grid item xs={12}>

          </Grid>

        </Grid>
      </div>

    </ApolloProvider >

  );
}

export default App;
