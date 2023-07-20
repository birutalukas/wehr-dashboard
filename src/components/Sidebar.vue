<template>
    <aside class="sidebar">
        <a href="/" class="logo">
            <img src="../assets/logo.svg" alt="WeHR" />
        </a>

        <h2>MAIN MENU</h2>

        <ul class="main-menu">
            <li>
                <a href="" class="active">
                    <img src="../assets/ic_dashboard.svg" alt="" />
                    <span>Dashboard</span>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="../assets/ic_recruitment.svg" alt="" />
                    <span>Recruitment</span>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="../assets/ic_calendar.svg" alt="" />
                    <span>Schedule</span>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="../assets/ic_employee.svg" alt="" />
                    <span>Employee</span>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="../assets/ic_department.svg" alt="" />
                    <span>Department</span>
                </a>
            </li>
        </ul>

        <h2>OTHER</h2>

        <ul class="main-menu">
            <li>
                <a href="">
                    <img src="../assets/ic_support.svg" alt="" />
                    <span>Support</span>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="../assets/ic_settings.svg" alt="" />
                    <span>Settings</span>
                </a>
            </li>
        </ul>
    </aside>
</template>
<style scoped>
.sidebar {
    display: none;
}
.logo {
    display: block;
    margin: 0 auto;
    margin-top: 40px;
    cursor: pointer;
}
.logo img {
    width: 100%;
}
h2 {
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    color: #686868;
    margin-bottom: 26px;
}
.main-menu {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    margin-bottom: 65px;
}
.main-menu li a {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #686868;
    display: flex;
    align-items: center;
    height: 56px;
    text-decoration: none;
}

.main-menu li a span {
    display: none;
}
.main-menu li a.active {
    color: #ff5151;
    font-weight: 500;
}
@media screen and (min-width: 834px) {
    .sidebar {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90px;
        overflow: hidden;
        background-color: #fafafa;
        min-height: 100vh;
    }
}
@media screen and (min-width: 1440px) {
    .logo {
        width: 110px;
    }
    .sidebar {
        width: 245px;
        padding: 0 32px;
        align-items: flex-start;
    }
    .main-menu li a img {
        margin-right: 24px;
    }
    .main-menu li a span {
        display: block;
    }
}
</style>
