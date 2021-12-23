import { useState } from 'react';
import { Container } from './LoginRegister.style';
import Login from '../components/forms/LoginFrom';
import Register from '../components/forms/RegisterForm';
import RightSide from '../components/layout/RightSide';

const Home = () => {
    const [log, setLog] = useState(true);
    return (
        <Container>
            {log ? <Login setLog={setLog} /> : <Register setLog={setLog} />}
            <RightSide />
        </Container>
    );
};
export default Home;
