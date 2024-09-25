import H2 from '../style/styled';
import { BrowserRouter as Outlet } from 'react-router-dom';
function Contact() {
   return <H2>Це контактна сторінка <Outlet/> </H2>;
}
export default Contact