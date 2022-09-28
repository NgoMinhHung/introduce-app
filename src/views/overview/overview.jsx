import React from "react";
import { Grid } from "@material-ui/core";
import Lottie from "react-lottie";
import { useStyles } from '../myStyle.style';

import animationDev from '../../assets/lotties/dev-skills.json';
import email from '../../assets/svg/email.svg';
import facebook from '../../assets/svg/facebook.svg';
import github from '../../assets/svg/github.svg';
import linkedIn from '../../assets/svg/linkedin.svg';
import phone from '../../assets/svg/phone.svg';
import twitter from '../../assets/svg/twitter.svg';

const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationDev,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

function Overview(props) {
    const {} = props
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container item xs={12} className={classes.wrapStyle}>
                {/* lottie */}
                <Lottie options={defaultOptions}/>
            </Grid>
            <Grid container item xs={12} className={classes.wrapStyle}>
                <p className={classes.textNormal} >Hi there.</p>
                <p className={classes.textNormal} >
                    I'm <span className={classes.textHighLight}>Minh Hung Ngo</span>
                </p>
                <p className={classes.textNormal}>
                    I'm Full Stack Developer.
                </p>
                <p className={classes.textNormal} >Contact me on</p>
                <Grid>
                    {/* Github */}
                    <a href="https://github.com/NgoMinhHung">
                        <img className={classes.iconStyle} src={github} alt=""/>
                    </a>
                    {/* Facebook */}
                    <a href="https://www.facebook.com/minhhung.ngo.97/">
                        <img className={classes.iconStyle} src={facebook} alt=""/>
                    </a>
                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/ng%C3%B4-minh-h%C3%B9ng-3b116124a/">
                        <img className={classes.iconStyle} src={linkedIn} alt=""/>
                    </a>
                    {/* Telephone */}
                    <a href="tel:+84-985-088-304">
                        <img className={classes.iconStyle} src={phone} alt=""/>
                    </a>
                    {/* Gmail */}
                    <a href="mailto:ngominhhung97@gmail.com">
                        <img className={classes.iconStyle} src={email} alt=""/>
                    </a>
                    {/* twitter */}
                    <a href="https://twitter.com/Johnhpc97">
                        <img className={classes.iconStyle} src={twitter} alt=""/>
                    </a>
                </Grid>
            </Grid>
        </div>
    )
}

export default Overview;