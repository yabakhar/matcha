import { RightSideStyle, EllipseLarge, Content } from './RightSide.style';
import { ReactComponent as Background } from '../../assets/LoginSignUp/sideRight/backgroundCerc.svg';
import { ReactComponent as LeftQuote } from '../../assets/LoginSignUp/sideRight/leftQuotes.svg';
import { ReactComponent as RightQuote } from '../../assets/LoginSignUp/sideRight/rightQuotes.svg';

const RightSide = () => {
    return (
        <RightSideStyle>
            <EllipseLarge />
            <Background />
            <Content>
                <div className="head">
                    <div className="icone-quote">
                        <LeftQuote />
                    </div>
                    <div className="text">
                        <p>
                            Excepteur consequat cillum quis nisi culpa
                            magna.Laborum exercitation adipisicing qui tempor do
                            ullamco mollit do velit culpa. Irure ad nostrud
                            adipisicing est non nostrud eiusmod culpa. Sint
                            minim et deserunt ex deserunt tempor.
                        </p>
                        <strong>- John Doe</strong>
                    </div>
                    <div className="icone-quote">
                        <RightQuote />
                    </div>
                </div>
                {/* <div className="swiper-container">
                    <div className="svgs"></div>
                    <div className="swipers">
                        <div className="cercle"></div>
                        <div className="cercle"></div>
                        <div className="cercle active"></div>
                    </div>
                </div> */}
            </Content>
        </RightSideStyle>
    );
};

export default RightSide;
