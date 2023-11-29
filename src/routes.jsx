import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contatos from './pages/NotasEX'
import Page404 from './pages/NotasAd'
import Header from './components/Header'



function AppRoutes() {
    return (
        <BrowserRouter>
        <Header />
            <Container>
            <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="/NotasAd" element={<Sobre />}></Route>
                <Route path="/NotasEX" element={ <Contatos /> }></Route>
            </Routes>
            <Header />
            </Container>
        </BrowserRouter>

    )
}

export default AppRoutes
