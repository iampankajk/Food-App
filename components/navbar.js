function navbar(){
    return `
    <ul id="li">
            <li>
                <a href="signup.html"><button>Sign Up</button></a>
            </li>
            <li>
                <a href="signIn.html" id="disable"><button id="btn">Login</button></a>
            </li>
            <li>
                <a href="search.html"><button>Home</button></a>
            </li>
        </ul>
        <h1>Zomato Food Receipe</h1>
        <h3>Discover the best food receipe & drinks in Delhi NCR</h3>

        <div class="searchbox">
            <div id="locationimg"><img
                    src="https://www.freepnglogos.com/uploads/pin-png/location-pin-connectsafely-37.png"></div>
            <div><select id="select">
                    <option value="">Lado Sarai New Delhi</option>
                    <option value="">
                        Noida
                    </option>
                    <option value="">
                        Gurugram
                    </option>
                </select></div>
            <div id="searchimg"><img
                    src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png"
                    alt=""></div>
            <div>
                <input type="text" id="searchFood" placeholder="Search Food" oninput="debounce(main,1000)">
                <div id="foods"></div>
            </div>
            

        </div>`;
}

export default navbar