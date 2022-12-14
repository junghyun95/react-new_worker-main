import SubSidebarCSS from "./SubSidebar.module.css";

import AssignmentIcon from '@mui/icons-material/Assignment';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CoPresentIcon from '@mui/icons-material/CoPresent';

import $ from 'jquery';

import { NavLink } from "react-router-dom";

function SubSidebar() {

    $(function () {
        $("#slideToggleBtn").on("click", function () {
            $("#divBox").fadeToggle("fast");
            $("#divBox1").hide();
            $("#divBox2").hide();
            $("#divBox3").hide();
            $("#divBox4").hide();
            $("#divBox5").hide();
            $("#divBox6").hide();
        });
    });

    $(function () {
        $("#slideToggleBtn1").on("click", function () {
            $("#divBox").hide();
            $("#divBox1").fadeToggle("fast");
            $("#divBox2").hide();
            $("#divBox3").hide();
            $("#divBox4").hide();
            $("#divBox5").hide();
            $("#divBox6").hide();
        });
    });

    $(function () {
        $("#slideToggleBtn2").on("click", function () {
            $("#divBox").hide();
            $("#divBox1").hide();
            $("#divBox2").fadeToggle("fast");
            $("#divBox3").hide();
            $("#divBox4").hide();
            $("#divBox5").hide();
            $("#divBox6").hide();
        });
    });

    $(function () {
        $("#slideToggleBtn3").on("click", function () {
            $("#divBox").hide();
            $("#divBox1").hide();
            $("#divBox2").hide();
            $("#divBox3").fadeToggle("fast");
            $("#divBox4").hide();
            $("#divBox5").hide();
            $("#divBox6").hide();
        });
    });

    $(function () {
        $("#slideToggleBtn4").on("click", function () {
            $("#divBox").hide();
            $("#divBox1").hide();
            $("#divBox2").hide();
            $("#divBox3").hide();
            $("#divBox4").fadeToggle("fast");
            $("#divBox5").hide();
            $("#divBox6").hide();
        });
    });

    $(function () {
        $("#slideToggleBtn5").on("click", function () {
            $("#divBox").hide();
            $("#divBox1").hide();
            $("#divBox2").hide();
            $("#divBox3").hide();
            $("#divBox4").hide();
            $("#divBox5").fadeToggle("fast");
            $("#divBox6").hide();
        });
    });

    $(function () {
        $("#slideToggleBtn6").on("click", function () {
            $("#divBox").hide();
            $("#divBox1").hide();
            $("#divBox2").hide();
            $("#divBox3").hide();
            $("#divBox4").hide();
            $("#divBox5").hide();
            $("#divBox6").hide();
        });
    });

    return (

        <div className={SubSidebarCSS.sidebar}>

            {/* 1.???????????? ?????? */}
            <div className={SubSidebarCSS.divBox} id="divBox">

                <div className={SubSidebarCSS.mui}>
                    <li>
                        <AssignmentIcon className={SubSidebarCSS.sideIcon} color="action" fontSize="large" />
                    </li>
                    <li>????????????</li>
                </div>
                <div>

                    <ul>
                        <li className={SubSidebarCSS.sideTitle1}>????????? ??????</li>
                        <li className={SubSidebarCSS.smallTitle}><NavLink to="/test/Test">?????? ?????? ??????</NavLink></li>
                        <li className={SubSidebarCSS.smallTitle}><NavLink to="/home/Home">?????? ?????? ??????</NavLink></li>
                    </ul>
                    <ul>
                        <li className={SubSidebarCSS.sideTitle2}>????????? ??????</li>
                        <li className={SubSidebarCSS.smallTitle}><NavLink to="/copy/Copy">?????? ??????</NavLink></li>
                        <li className={SubSidebarCSS.smallTitle}>?????? ??????</li>
                    </ul>
                </div>

            </div>
            {/* 2.???????????? ?????? */}
            <div className={SubSidebarCSS.divBox} id="divBox1">

                <div className={SubSidebarCSS.mui}>
                    <li>
                        <AssignmentIcon className={SubSidebarCSS.sideIcon} color="action" fontSize="large" />
                    </li>
                    <li>????????????</li>
                </div>
                <div className={SubSidebarCSS.smallBox}>

                    <ul>
                        <li className={SubSidebarCSS.smallTitle}>?????? ??????</li>
                        <li className={SubSidebarCSS.smallTitle}>?????????</li>
                        <li className={SubSidebarCSS.smallTitle}>?????????</li>
                    </ul>

                </div>

            </div>

            {/* 3.????????? ?????? */}
            <div className={SubSidebarCSS.divBox} id="divBox2">
                <div className={SubSidebarCSS.mui}>
                    <li>
                        <CoPresentIcon className={SubSidebarCSS.sideIcon} color="action" fontSize="large" />
                    </li>
                    <li>????????????</li>
                </div>
                <div className={SubSidebarCSS.smallBox}>

                    <ul>
                        <li className={SubSidebarCSS.smallTitle}>?????? ??????</li>
                        {/* ???????????? ???????????? ???????????? ????????? ??? */}
                        <li className={SubSidebarCSS.smallTitle}>?????? ??????</li>

                    </ul>

                </div>
            </div>
            {/* 3.????????? ?????? */}
            <div className={SubSidebarCSS.divBox} id="divBox3">

                <div className={SubSidebarCSS.mui}>
                    <li>
                        <EmailIcon className={SubSidebarCSS.sideIcon} color="action" fontSize="large" />
                    </li>
                    <li>?????????</li>
                </div>
                <div className={SubSidebarCSS.smallBox}>

                    <ul>
                        <li className={SubSidebarCSS.smallTitle}>??? ????????? ??????</li>
                        <li className={SubSidebarCSS.smallTitle}>?????? ????????????</li>
                        <li className={SubSidebarCSS.smallTitle}>?????? ????????????</li>
                        <li className={SubSidebarCSS.smallTitle}>?????? ????????????</li>
                        <li className={SubSidebarCSS.smallTitle}>?????????</li>
                    </ul>

                </div>

            </div>
            {/* 4.????????? ?????? */}
            <div className={SubSidebarCSS.divBox} id="divBox4">

                <div className={SubSidebarCSS.mui}>
                    <li>
                        <CalendarMonthIcon className={SubSidebarCSS.sideIcon} color="action" fontSize="large" />
                    </li>
                    <li>?????????</li>
                </div>
                <div className={SubSidebarCSS.smallBox}>

                    <ul>
                        <li className={SubSidebarCSS.smallTitle}>??? ?????? ??????</li>
                        <li className={SubSidebarCSS.smallTitle}>??? ?????????</li>

                    </ul>

                </div>

            </div>
            {/* 5.???????????? ?????? */}
            <div className={SubSidebarCSS.divBox} id="divBox5">

                <div className={SubSidebarCSS.mui}>
                    <li>
                        <AssignmentIcon className={SubSidebarCSS.sideIcon} color="action" fontSize="large" />
                    </li>
                    <li>????????????</li>
                </div>
                <div>
                    <ul>
                        <li className={SubSidebarCSS.sideTitle1}> ?????????</li>
                        <li className={SubSidebarCSS.smallTitle}>???????????? ??????</li>
                        <li className={SubSidebarCSS.smallTitle}>????????? ??????</li>
                        <li className={SubSidebarCSS.smallTitle}>?????? ?????? ??????</li>
                    </ul>

                </div>

            </div>
            {/* 7.?????? ?????? ?????? / ????????? ????????? ??? */}
            <div className={SubSidebarCSS.divBox} id="divBox7">

                <div className={SubSidebarCSS.mui}>
                    <li>
                        <CoPresentIcon className={SubSidebarCSS.sideIcon} color="action" fontSize="large" />
                    </li>
                    <li>????????????</li>
                </div>
                <div className={SubSidebarCSS.smallBox}>

                    <ul>
                        <li className={SubSidebarCSS.smallTitle}>?????? ??????</li>
                        <li className={SubSidebarCSS.smallTitle}>?????? ??????</li>

                    </ul>

                </div>

            </div>

        </div>
    );

}

export default SubSidebar;