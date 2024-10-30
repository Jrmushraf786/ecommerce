import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import "./Footer.css";
const Footer =()=>{
    return(
        <>
            <div className="Footer">
                <div className="FooterBottomToTop">
                    <ExpandLessIcon/>
                </div>
                <div className="FooterVerRow">
                    <div className="FooterVerCol">
                        <div className='FotterVerColHead'>Get To Know UIs</div>
                        <ul>
                            <li>About</li>
                            <li>Servies</li>
                            <li>Website Cares</li>
                            <li>Gift Products</li>
                        </ul>
                    </div>
                    <div className="FooterVerCol">
                        <div className='FotterVerColHead'>Connect To  Us</div>
                        <ul>
                            <li>Meta</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>Github</li>
                        </ul>
                    </div>
                    <div className="FooterVerCol">
                        <div className='FotterVerColHead'>Get To Know UIs</div>
                        <ul>
                            <li>Amazon Pay</li>
                            <li>sell on Amazont</li>
                            <li>beacme an affiliate</li>
                            <li>Amazon Web SErvices</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="FooterLast">
                    <span className='FooterMess'>
                    Amazon Clone &copy;
                    </span>
                   
                </div>
            </div>
        </>
    )
}
export default Footer;