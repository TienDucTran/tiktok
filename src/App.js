import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { puclicRoutes } from '~/routes'
function App() {

    return (
        <Router>
            <div className="App">
                <Routes>
                    {puclicRoutes.map((route, index) => {
                        const Layout = route.layout ? route.layout : Fragment
                        const Page = route.component
                        return < Route
                            key={index}
                            path={route.path}
                            element={<Layout>
                                <Page />
                            </Layout>} />
                    })}
                </Routes>
            </div>
        </Router>
    );
}
export default App