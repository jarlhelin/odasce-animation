document.addEventListener("DOMContentLoaded", (event) => {
    //
    // arrow vars
    //
    // arrows north-east
    /* -------------------------------- COMMENT TO DELETE 
    var getCl_Arr_NE_1 = document.getElementsByClassName('animblock__item--arr-ne')[0].children[0].children[0].children;
    var getCl_Arr_NE_2 = document.getElementsByClassName('animblock__item--arr-ne')[0].children[0].children[1].children;
    var getCl_Arr_NE_3 = document.getElementsByClassName('animblock__item--arr-ne')[0].children[0].children[2].children;
    var getCl_Arr_NE_4 = document.getElementsByClassName('animblock__item--arr-ne')[0].children[0].children[3].children;
    var getCl_Arr_NE_BIN_5a = document.getElementsByClassName('animblock__item--arr-ne')[0].children[0].children[4].children;
    var getCl_Arr_NE_BIN_5b = getCl_Arr_NE_BIN_5a[0].parentNode.nextSibling.nextSibling.children;
    var getCl_Arr_NE_BIN_5c = getCl_Arr_NE_BIN_5b[0].parentNode.nextSibling.nextSibling.children;
    var getCl_Arr_NE_1 = document.getElementsByClassName('animblock__item--arr-ne')[0].children[0].children[0].children;
    var getCl_Arr_NE_2 = document.getElementsByClassName('animblock__item--arr-ne')[0].children[0].children[1].children;
    var getCl_Arr_NE_3 = document.getElementsByClassName('animblock__item--arr-ne')[0].children[0].children[2].children;
    var getCl_Arr_NE_4 = document.getElementsByClassName('animblock__item--arr-ne')[0].children[0].children[3].children;
    // arrows north-east
    // arrows south-west
    var getCl_Arr_SW_1 = document.getElementsByClassName('animblock__item--arr-sw')[0].children[0].children[0].children;
    var getCl_Arr_SW_2 = document.getElementsByClassName('animblock__item--arr-sw')[0].children[0].children[1].children;
    var getCl_Arr_SW_3 = document.getElementsByClassName('animblock__item--arr-sw')[0].children[0].children[2].children;
    var getCl_Arr_SW_4 = document.getElementsByClassName('animblock__item--arr-sw')[0].children[0].children[3].children;
    var getCl_Arr_SW_BIN_5a = document.getElementsByClassName('animblock__item--arr-sw')[0].children[0].children[4].children;
    var getCl_Arr_SW_BIN_5b = getCl_Arr_SW_BIN_5a[0].parentNode.nextSibling.nextSibling.children;
    var getCl_Arr_SW_BIN_5c = getCl_Arr_SW_BIN_5b[0].parentNode.nextSibling.nextSibling.children;
    var getCl_Arr_SW_1 = document.getElementsByClassName('animblock__item--arr-sw')[0].children[0].children[0].children;
    var getCl_Arr_SW_2 = document.getElementsByClassName('animblock__item--arr-sw')[0].children[0].children[1].children;
    var getCl_Arr_SW_3 = document.getElementsByClassName('animblock__item--arr-sw')[0].children[0].children[2].children;
    var getCl_Arr_SW_4 = document.getElementsByClassName('animblock__item--arr-sw')[0].children[0].children[3].children;
    // arrows south-west
    // arrows north-west
    var getCl_Arr_NW_1 = document.getElementsByClassName('animblock__item--arr-nw')[0].children[0].children[0].children;
    var getCl_Arr_NW_2 = document.getElementsByClassName('animblock__item--arr-nw')[0].children[0].children[1].children;
    var getCl_Arr_NW_3 = document.getElementsByClassName('animblock__item--arr-nw')[0].children[0].children[2].children;
    var getCl_Arr_NW_4 = document.getElementsByClassName('animblock__item--arr-nw')[0].children[0].children[3].children;
    var getCl_Arr_NW_BIN_5a = document.getElementsByClassName('animblock__item--arr-nw')[0].children[0].children[4].children;
    var getCl_Arr_NW_BIN_5b = getCl_Arr_NW_BIN_5a[0].parentNode.nextSibling.nextSibling.children;
    var getCl_Arr_NW_BIN_5c = getCl_Arr_NW_BIN_5b[0].parentNode.nextSibling.nextSibling.children;
    var getCl_Arr_NW_1 = document.getElementsByClassName('animblock__item--arr-nw')[0].children[0].children[0].children;
    var getCl_Arr_NW_2 = document.getElementsByClassName('animblock__item--arr-nw')[0].children[0].children[1].children;
    var getCl_Arr_NW_3 = document.getElementsByClassName('animblock__item--arr-nw')[0].children[0].children[2].children;
    var getCl_Arr_NW_4 = document.getElementsByClassName('animblock__item--arr-nw')[0].children[0].children[3].children;
    // arrows north-west
    // arrows south-east
    var getCl_Arr_SE_1 = document.getElementsByClassName('animblock__item--arr-se')[0].children[0].children[0].children;
    var getCl_Arr_SE_2 = document.getElementsByClassName('animblock__item--arr-se')[0].children[0].children[1].children;
    var getCl_Arr_SE_3 = document.getElementsByClassName('animblock__item--arr-se')[0].children[0].children[2].children;
    var getCl_Arr_SE_4 = document.getElementsByClassName('animblock__item--arr-se')[0].children[0].children[3].children;
    var getCl_Arr_SE_BIN_5a = document.getElementsByClassName('animblock__item--arr-se')[0].children[0].children[4].children;
    var getCl_Arr_SE_BIN_5b = getCl_Arr_SE_BIN_5a[0].parentNode.nextSibling.nextSibling.children;
    var getCl_Arr_SE_BIN_5c = getCl_Arr_SE_BIN_5b[0].parentNode.nextSibling.nextSibling.children;
    var getCl_Arr_SE_1 = document.getElementsByClassName('animblock__item--arr-se')[0].children[0].children[0].children;
    var getCl_Arr_SE_2 = document.getElementsByClassName('animblock__item--arr-se')[0].children[0].children[1].children;
    var getCl_Arr_SE_3 = document.getElementsByClassName('animblock__item--arr-se')[0].children[0].children[2].children;
    var getCl_Arr_SE_4 = document.getElementsByClassName('animblock__item--arr-se')[0].children[0].children[3].children;
    // arrows south-east
     -------------------------------- COMMENT TO DELETE */
    //
    // factory vars
    //
    //
    var factoryNorth = document.getElementsByClassName('factory')[0].children;
    var factorySouth = document.getElementsByClassName('factory')[1].children;
    //  *** vars
    //
    //
    // Arrow loop features
    //
    /* -------------------------------- COMMENT TO DELETE
    function smallPanel() {
        // as long as there are children, count it through
        for (var i = 0; i < getCl_Arr_NE_1.length; i++) {
            // establish a radom number between min and max
            // var min = -0.25,
            //     max = 1.00,
            //     // randomize to 2 decimals
            //     randomNumber = (Math.random() * (max - min) + min).toFixed(2);
            // add random css value to property 
            // randomize to 2 decimals
            var randomNumberOpacity = (Math.random() * (2.00 - 1.00) + 1.00).toFixed(2);
            var randomNumberPosition = (Math.random() * (-10.00 - 10.00) + 10.00).toFixed(2);
            TweenMax.to(getCl_Arr_NE_1[i], randomNumberOpacity, {
                opacity: randomNumberOpacity,
                y: randomNumberPosition,
                z: randomNumberPosition,
                x: randomNumberPosition,
                repeat: -1
            });
        }
        for (var i = 0; i < getCl_Arr_SW_1.length; i++) {
            var randomNumberOpacity = (Math.random() * (2.00 - 1.00) + 1.00).toFixed(2);
            var randomNumberPosition = (Math.random() * (-10.00 - 10.00) + 10.00).toFixed(2);
            TweenMax.to(getCl_Arr_SW_1[i], randomNumberOpacity, {
                opacity: randomNumberOpacity,
                y: randomNumberPosition,
                z: randomNumberPosition,
                x: randomNumberPosition,
                repeat: -1
            });
        }
        for (var i = 0; i < getCl_Arr_NW_1.length; i++) {
            var randomNumberOpacity = (Math.random() * (2.00 - 1.00) + 1.00).toFixed(2);
            var randomNumberPosition = (Math.random() * (-10.00 - 10.00) + 10.00).toFixed(2);
            TweenMax.to(getCl_Arr_NW_1[i], randomNumberOpacity * 2, {
                opacity: randomNumberOpacity,
                y: randomNumberPosition * -4,
                // z: randomNumberPosition * -2,
                x: randomNumberPosition * 4,
                repeat: -1
            });
        }
        for (var i = 0; i < getCl_Arr_SE_1.length; i++) {
            var randomNumberOpacity = (Math.random() * (2.00 - 1.00) + 1.00).toFixed(2);
            var randomNumberPosition = (Math.random() * (-10.00 - 10.00) + 10.00).toFixed(2);
            TweenMax.to(getCl_Arr_SE_1[i], randomNumberOpacity * 2, {
                opacity: randomNumberOpacity,
                y: randomNumberPosition * -4,
                // z: randomNumberPosition * -2,
                x: randomNumberPosition * 4,
                repeat: -1
            });
        }
        // smallPanel
    }

    function mediumPanel() {
        // as long as there are children, count it through
        for (var i = 0; i < getCl_Arr_NE_2.length; i++) {
            var randomNumberOpacity = (Math.random() * (2.00 - 1.00) + 1.00).toFixed(2);
            var randomNumberPosition = (Math.random() * (-20.00 - 20.00) + 20.00).toFixed(2);
            TweenMax.to(getCl_Arr_NE_2[i], randomNumberOpacity * 5, {
                opacity: randomNumberOpacity,
                y: randomNumberPosition * 1.5,
                z: randomNumberPosition * 1.5,
                x: randomNumberPosition * 1.5,
                repeat: -1
            });
        }
        for (var i = 0; i < getCl_Arr_SW_2.length; i++) {
            var randomNumberOpacity = (Math.random() * (2.00 - 1.00) + 1.00).toFixed(2);
            var randomNumberPosition = (Math.random() * (-20.00 - 20.00) + 20.00).toFixed(2);
            TweenMax.to(getCl_Arr_SW_2[i], randomNumberOpacity * 5, {
                opacity: randomNumberOpacity,
                y: randomNumberPosition * 1.5,
                z: randomNumberPosition * 1.5,
                x: randomNumberPosition * 1.5,
                repeat: -1
            });
        }
        for (var i = 0; i < getCl_Arr_NW_2.length; i++) {
            var randomNumberOpacity = (Math.random() * (2.00 - 1.00) + 1.00).toFixed(2);
            var randomNumberPosition = (Math.random() * (-20.00 - 20.00) + 20.00).toFixed(2);
            TweenMax.to(getCl_Arr_NW_2[i], randomNumberOpacity * 5, {
                opacity: randomNumberOpacity,
                y: randomNumberPosition * 2,
                // z: randomNumberPosition * -1.5,
                x: randomNumberPosition * -4,
                repeat: -1
            });
        }
        for (var i = 0; i < getCl_Arr_SE_2.length; i++) {
            var randomNumberOpacity = (Math.random() * (2.00 - 1.00) + 1.00).toFixed(2);
            var randomNumberPosition = (Math.random() * (-20.00 - 20.00) + 20.00).toFixed(2);
            TweenMax.to(getCl_Arr_SE_2[i], randomNumberOpacity * 5, {
                opacity: randomNumberOpacity,
                y: randomNumberPosition * 2,
                // z: randomNumberPosition * -1.5,
                x: randomNumberPosition * -4,
                repeat: -1
            });
        }
        // smallPanel
    }

    function bigPanel() {
        // as long as there are children, count it through
        for (var i = 0; i < getCl_Arr_NE_3.length; i++) {
            var randomNumberOpacity = (Math.random() * (2.00 - 1.00) + 1.00).toFixed(2);
            var randomNumberPosition = (Math.random() * (-40.00 - 20.00) + 40.00).toFixed(2);
            TweenMax.to(getCl_Arr_NE_3[i], randomNumberOpacity * 10, {
                opacity: randomNumberOpacity,
                y: randomNumberPosition * 1.5,
                z: randomNumberPosition * 1.5,
                x: randomNumberPosition * 1.5,
                repeat: -1
            });
        }
        for (var i = 0; i < getCl_Arr_SW_3.length; i++) {
            var randomNumberOpacity = (Math.random() * (2.00 - 1.00) + 1.00).toFixed(2);
            var randomNumberPosition = (Math.random() * (-40.00 - 20.00) + 40.00).toFixed(2);
            TweenMax.to(getCl_Arr_SW_3[i], randomNumberOpacity * 10, {
                opacity: randomNumberOpacity,
                y: randomNumberPosition * 1.5,
                z: randomNumberPosition * 1.5,
                x: randomNumberPosition * 1.5,
                repeat: -1
            });
        }
        for (var i = 0; i < getCl_Arr_NW_3.length; i++) {
            var randomNumberOpacity = (Math.random() * (2.00 - 1.00) + 1.00).toFixed(2);
            var randomNumberPosition = (Math.random() * (-20.00 - 20.00) + 20.00).toFixed(2);
            TweenMax.to(getCl_Arr_NW_3[i], randomNumberOpacity * 10, {
                opacity: randomNumberOpacity,
                y: randomNumberPosition * 3,
                // z: randomNumberPosition * 1.5,
                x: randomNumberPosition * -2,
                repeat: -1
            });
        }
        for (var i = 0; i < getCl_Arr_SE_3.length; i++) {
            var randomNumberOpacity = (Math.random() * (2.00 - 1.00) + 1.00).toFixed(2);
            var randomNumberPosition = (Math.random() * (-20.00 - 20.00) + 20.00).toFixed(2);
            TweenMax.to(getCl_Arr_SE_3[i], randomNumberOpacity * 10, {
                opacity: randomNumberOpacity,
                y: randomNumberPosition * 3,
                // z: randomNumberPosition * 1.5,
                x: randomNumberPosition * -2,
                repeat: -1
            });
        }
        // smallPanel
    }

    function hugePanel() {
        // as long as there are children, count it through
        for (var i = 0; i < getCl_Arr_NE_4.length; i++) {
            var randomNumberOpacity = (Math.random() * (2.00 - 1.00) + 1.00).toFixed(2);
            var randomNumberPosition = (Math.random() * (-0.25 - 0.25) + 0.25).toFixed(2);
            TweenMax.to(getCl_Arr_NE_4[i], randomNumberOpacity / 4, {
                z: randomNumberPosition * 1.5,
                y: randomNumberPosition * 1.5,

                repeat: -1
            });
        }
        for (var i = 0; i < getCl_Arr_SW_4.length; i++) {
            var randomNumberOpacity = (Math.random() * (2.00 - 1.00) + 1.00).toFixed(2);
            var randomNumberPosition = (Math.random() * (-0.25 - 0.25) + 0.25).toFixed(2);
            TweenMax.to(getCl_Arr_SW_4[i], randomNumberOpacity / 4, {
                z: randomNumberPosition * 1.5,
                y: randomNumberPosition * 1.5,

                repeat: -1
            });
        }
        for (var i = 0; i < getCl_Arr_NW_4.length; i++) {
            var randomNumberOpacity = (Math.random() * (2.00 - 1.00) + 1.00).toFixed(2);
            var randomNumberPosition = (Math.random() * (-0.25 - 0.25) + 0.25).toFixed(2);
            TweenMax.to(getCl_Arr_NW_4[i], randomNumberOpacity / 4, {
                z: randomNumberPosition * 1.5,
                y: randomNumberPosition * 1.5,

                repeat: -1
            });
        }
        for (var i = 0; i < getCl_Arr_SE_4.length; i++) {
            var randomNumberOpacity = (Math.random() * (2.00 - 1.00) + 1.00).toFixed(2);
            var randomNumberPosition = (Math.random() * (-0.25 - 0.25) + 0.25).toFixed(2);
            TweenMax.to(getCl_Arr_SE_4[i], randomNumberOpacity / 4, {
                z: randomNumberPosition * 1.5,
                y: randomNumberPosition * 1.5,

                repeat: -1
            });
        }
        // smallPanel
    }

    function binaryCodePanel() {
        // as long as there are children, count it through
        for (var i = 0; i < getCl_Arr_NE_BIN_5a.length; i++) {
            var randomNumberOpacity = (Math.random() * (1.00) + 0.05).toFixed(2);
            var randomNumberPosition = (Math.random() * (-0.25 - 0.25) + 0.25).toFixed(2);
            TweenMax.to(getCl_Arr_NE_BIN_5a[i], randomNumberOpacity * 1.25, {
                opacity: randomNumberOpacity,
                repeat: -1
            });
        }
        for (var i = 0; i < getCl_Arr_NE_BIN_5b.length; i++) {
            var randomNumberOpacity = (Math.random() * (1.00) + 0.05).toFixed(2);
            var randomNumberPosition = (Math.random() * (-0.25 - 0.25) + 0.25).toFixed(2);
            TweenMax.to(getCl_Arr_NE_BIN_5b[i], randomNumberOpacity * 1.25, {
                opacity: randomNumberOpacity,
                repeat: -1
            });

        }
        for (var i = 0; i < getCl_Arr_NE_BIN_5c.length; i++) {
            var randomNumberOpacity = (Math.random() * (1.00) + 0.05).toFixed(2);
            var randomNumberPosition = (Math.random() * (-0.25 - 0.25) + 0.25).toFixed(2);
            TweenMax.to(getCl_Arr_NE_BIN_5c[i], randomNumberOpacity * 1.25, {
                opacity: randomNumberOpacity,
                repeat: -1
            });

        }
        for (var i = 0; i < getCl_Arr_SW_BIN_5a.length; i++) {
            var randomNumberOpacity = (Math.random() * (1.00) + 0.05).toFixed(2);
            var randomNumberPosition = (Math.random() * (-0.25 - 0.25) + 0.25).toFixed(2);
            TweenMax.to(getCl_Arr_SW_BIN_5a[i], randomNumberOpacity * 1.25, {
                opacity: randomNumberOpacity,
                repeat: -1
            });
        }
        for (var i = 0; i < getCl_Arr_SW_BIN_5b.length; i++) {
            var randomNumberOpacity = (Math.random() * (1.00) + 0.05).toFixed(2);
            var randomNumberPosition = (Math.random() * (-0.25 - 0.25) + 0.25).toFixed(2);
            TweenMax.to(getCl_Arr_SW_BIN_5b[i], randomNumberOpacity * 1.25, {
                opacity: randomNumberOpacity,
                repeat: -1
            });

        }
        for (var i = 0; i < getCl_Arr_SW_BIN_5c.length; i++) {
            var randomNumberOpacity = (Math.random() * (1.00) + 0.05).toFixed(2);
            var randomNumberPosition = (Math.random() * (-0.25 - 0.25) + 0.25).toFixed(2);
            TweenMax.to(getCl_Arr_SW_BIN_5c[i], randomNumberOpacity * 1.25, {
                opacity: randomNumberOpacity,
                repeat: -1
            });

        }
        for (var i = 0; i < getCl_Arr_NW_BIN_5a.length; i++) {
            var randomNumberOpacity = (Math.random() * (1.00) + 0.05).toFixed(2);
            var randomNumberPosition = (Math.random() * (-0.25 - 0.25) + 0.25).toFixed(2);
            TweenMax.to(getCl_Arr_NW_BIN_5a[i], randomNumberOpacity * 1.25, {
                opacity: randomNumberOpacity,
                repeat: -1
            });
        }
        for (var i = 0; i < getCl_Arr_NW_BIN_5b.length; i++) {
            var randomNumberOpacity = (Math.random() * (1.00) + 0.05).toFixed(2);
            var randomNumberPosition = (Math.random() * (-0.25 - 0.25) + 0.25).toFixed(2);
            TweenMax.to(getCl_Arr_NW_BIN_5b[i], randomNumberOpacity * 1.25, {
                opacity: randomNumberOpacity,
                repeat: -1
            });

        }
        for (var i = 0; i < getCl_Arr_NW_BIN_5c.length; i++) {
            var randomNumberOpacity = (Math.random() * (1.00) + 0.05).toFixed(2);
            var randomNumberPosition = (Math.random() * (-0.25 - 0.25) + 0.25).toFixed(2);
            TweenMax.to(getCl_Arr_NW_BIN_5c[i], randomNumberOpacity * 1.25, {
                opacity: randomNumberOpacity,
                repeat: -1
            });

        }
        for (var i = 0; i < getCl_Arr_SE_BIN_5a.length; i++) {
            var randomNumberOpacity = (Math.random() * (1.00) + 0.05).toFixed(2);
            var randomNumberPosition = (Math.random() * (-0.25 - 0.25) + 0.25).toFixed(2);
            TweenMax.to(getCl_Arr_SE_BIN_5a[i], randomNumberOpacity * 1.25, {
                opacity: randomNumberOpacity,
                repeat: -1
            });
        }
        for (var i = 0; i < getCl_Arr_SE_BIN_5b.length; i++) {
            var randomNumberOpacity = (Math.random() * (1.00) + 0.05).toFixed(2);
            var randomNumberPosition = (Math.random() * (-0.25 - 0.25) + 0.25).toFixed(2);
            TweenMax.to(getCl_Arr_SE_BIN_5b[i], randomNumberOpacity * 1.25, {
                opacity: randomNumberOpacity,
                repeat: -1
            });

        }
        for (var i = 0; i < getCl_Arr_SE_BIN_5c.length; i++) {
            var randomNumberOpacity = (Math.random() * (1.00) + 0.05).toFixed(2);
            var randomNumberPosition = (Math.random() * (-0.25 - 0.25) + 0.25).toFixed(2);
            TweenMax.to(getCl_Arr_SE_BIN_5c[i], randomNumberOpacity * 1.25, {
                opacity: randomNumberOpacity,
                repeat: -1
            });

        }

        // binary
    }
    
    //
    // /Arrow loop features
    //
    //
    // planes
    //
    function planeLoop() {
        var planes = document.getElementsByClassName('plane')[0].children;
        var plane = document.getElementsByClassName('animblock__item--city-west')[0].children[1];
        var randomNumber = (Math.random() * (2.00) + 1.50).toFixed(2);
            // console.log(plane.children[2]);
        
        
        // two planes east
        for (var i = 0; i < planes.length; i++) {
            
            planes[i].children[1].style.left = '-4px';
            planes[i].children[1].style.top = '-2px';
            // jet
            TweenMax.to(planes[i].children[1], randomNumber / 2, {
                opacity: 0.2,
                left: -8,
                top: -5,
                repeat: -1
            });
            //front
            TweenMax.to(planes[0].children[2], 1, {
                left: -4,
                top: -2,
                repeat: -1
            });
            TweenMax.to(planes[1].children[2], 1.33, {
                left: -4,
                top: -2,
                repeat: -1
            });
        }
        // plane west side
        // jet
        plane.children[2].style.left = '-5px';
        plane.children[1].style.top = '-3px';
        TweenMax.to(plane.children[2], randomNumber / 2, {
            opacity: 0,
            left: -8,
            top: 2,
            repeat: -1
        });
        TweenMax.to(plane.children[0], randomNumber / 3, {
            left: 1,
            top: -2,
            repeat: -1
        });
    }
    
    function truckLoop() {
        var truckOne = document.getElementsByClassName('truck')[0].children;
        var truckTwo = document.getElementsByClassName('animblock__item--city-west')[0].children[3].children;
        
        for (var i = 0; i < truckOne.length; i++) {
            var randomNumber = (Math.random() * (-2.5 - 2.5) + 2.5).toFixed(2);
            TweenMax.to(truckOne[0], 1, {
                left: randomNumber,
                top: 0,
                repeat: -1
            });
            TweenMax.to(truckOne[1], 1.33, {
                left: randomNumber,
                top: 0,
                repeat: -1
            });
            TweenMax.to(truckTwo[0], 1, {
                left: randomNumber,
                top: 0,
                repeat: -1
            });
            TweenMax.to(truckTwo[1], 1.33, {
                left: randomNumber,
                top: 0,
                repeat: -1
            });
        }
    }
    
    function signLoop() {
        var randomNumber = (Math.random() * (-2.5 - 2.5) + 2.5).toFixed(2);
        var sign = document.getElementsByClassName('sign')[0].children;
        // for (var i = 0; i < sign.length; i++) {
            //     TweenMax.to(sign[4], 1.33, {
                //         left: randomNumber,
                //         left: 3,
                //         left: -3,
                //         repeat: -1
                //     });
                // }
            }
            
            function northFactoryLoop() {
                // var randomNumber = (Math.random() * (1 - 1) + 2.5).toFixed(2);
                
                for (var i = 0; i < factoryNorth.length; i++) {
                        //console.log(factoryNorth);
                    if (i > 0 && i < 4) {
                        // smoke
                        var randomNumber = (Math.random() * (2.00 - 1.00) + 1.00).toFixed(2);
                        TweenMax.to(factoryNorth[i].children[1], randomNumber, {
                            opacity: 1,
                            top: -30,
                            width: 30,
                            left: -6,
                            repeat: -1
                        });
                        // statistics
                    } else if (i >= 6 && i <= factoryNorth.length) {
                        var randomNumber = (Math.random() * (2.00 - 1.00) + 0.00).toFixed(2);
                        TweenMax.to(factoryNorth[i].children[3], i * 1.33, {
                            opacity: randomNumber,
                            repeat: -1
                        });
                        TweenMax.to(factoryNorth[i].children[4], i, {
                            opacity: randomNumber,
                            repeat: -1
                        });
                        TweenMax.to(factoryNorth[i].children[5], i * 1.66, {
                            opacity: randomNumber,
                            repeat: -1
                        });
                        // boxes
                    } else if (i > 3 && i < 6) {
                        var randomNumber = (Math.random() * (1.00 - 1.00) + 0).toFixed(2);
                        TweenMax.to(factoryNorth[4].children[0], 12, {
                            x: 13,
                            y: -6,
                            repeat: -1
                        });
                        TweenMax.to(factoryNorth[5].children[0], 10, {
                            x: 31,
                            y: 18,
                            repeat: -1
                        });
                    }
                    
                }
            }
            
            function southFactoryLoop() {
                    console.log(factorySouth[0]); // mat left
                    // console.log(); // mat left
                    // console.log(factorySouth[1].children.length); // smoke + factory
                    // console.log(factorySouth[1].children.length); // smoke + factory
                    // console.log(factorySouth[2]); // mat right
                    // console.log(factorySouth.children[1  ].length); // mat right
                    // console.log(factorySouth[1].children[1].children[1]);
                for (var i = 0; i < factorySouth[1].children.length; i++) {
                    if (i > 0 && i < 4) {
                        // smoke
                        var randomNumber = (Math.random() * (-4.00 - 1.00) + 1.00).toFixed(2);
                        var randomNumberSmoke = (Math.random() * (4.00 - 1.00) + 1.00).toFixed(2);
                        TweenMax.to(factorySouth[1].children[i].children[1], randomNumberSmoke / 2, {
                            top: -10,
                            left: randomNumber,
                            repeat: -1
                        });
                    }
                } // for
                TweenMax.to(factorySouth[0].children[2], 8, {
                    top: 50,
                    left: 60,
                    repeat: -1
                });
                TweenMax.to(factorySouth[2].children[2], 5, {
                    top: 150,
                    left: 164,
                    repeat: -1
                });
            } // southFactoryLoop
            function digitalServiceLoop() {
                var randomNumber;
                var panelsNorth = document.getElementsByClassName("digital-circuit__information")[0].children;
                var panelsSouth = document.getElementsByClassName("digital--south")[0].children[4].children;
                var panelNorth;
                var panelSouth;
                
                for (var i = 0; i < panelsNorth.length; i++) {
                    // var panel = panels.children[i]; 
                    // console.log(i);

                    // console.log(panelsNorth);
                    if (i == 0) {
                        randomNumber = (Math.random() * (4.00 - 1.00) + 1.00).toFixed(2);
                        panelNorth = panelsNorth[i];
                        TweenMax.to(panelNorth, randomNumber, {
                            opacity: 0,
                            top: -88,
                            left: -21,
                            repeat: -1
                        });
                    } else if (i == 1) {
                        randomNumber = (Math.random() * (4.00 - 1.00) + 1.00).toFixed(2);
                        panelNorth = panelsNorth[i];
                        TweenMax.to(panelNorth, randomNumber, {
                            opacity: 0,
                            repeat: -1
                        });
                    } else if (i == 2) {
                        randomNumber = (Math.random() * (4.00 - 1.00) + 1.00).toFixed(2);
                        panelNorth = panelsNorth[i];
                        TweenMax.to(panelNorth, randomNumber, {
                            opacity: 0,
                            top: -76,
                            left: -95,
                            repeat: -1
                        });
                    } else if (i == 3) {
                        randomNumber = (Math.random() * (4.00 - 1.00) + 1.00).toFixed(2);
                        panelNorth = panelsNorth[i];
                        TweenMax.to(panelNorth, randomNumber, {
                            opacity: 0,
                            top: -86,
                            left: -73,
                            repeat: -1
                        });
                    } else if (i == 4) {
                        randomNumber = (Math.random() * (4.00 - 1.00) + 1.00).toFixed(2);
                        panelNorth = panelsNorth[i];
                        TweenMax.to(panelNorth, randomNumber, {
                            opacity: 0,
                            top: -98,
                            left: -101,
                            repeat: -1
                        });
                    } else if (i == 5) {
                        randomNumber = (Math.random() * (4.00 - 1.00) + 1.00).toFixed(2);
                        panelNorth = panelsNorth[i];
                        TweenMax.to(panelNorth, randomNumber, {
                            opacity: 0,
                            top: -90,
                            left: -116,
                            repeat: -1
                        });
                    } else {
                        randomNumber = (Math.random() * (4.00 - 1.00) + 1.00).toFixed(2);
                        panelNorth = panelsNorth[i];
                        TweenMax.to(panelNorth, randomNumber, {
                            opacity: 0,
                    top: -125,
                    left: -42,
                    repeat: -1
                });
            }
            

        } // for
        
        for (var j = 0; j < panelsSouth.length; j++) {
            
            // console.log(panel);
            if (j == 0) {
                randomNumber = (Math.random() * (4.00 - 1.00) + 1.00).toFixed(2);
                panelSouth = panelsSouth[j];
            } else if (j == 1) {
                randomNumber = (Math.random() * (4.00 - 1.00) + 1.00).toFixed(2);
                panelSouth = panelsSouth[j];
                TweenMax.to(panelSouth, randomNumber, {
                    opacity: 0,
                    top: -8,
                    left: -76,
                    repeat: -1
                });
            } else if (j == 2) {
                randomNumber = (Math.random() * (4.00 - 1.00) + 1.00).toFixed(2);
                panelSouth = panelsSouth[j];
                TweenMax.to(panelSouth, randomNumber, {
                    opacity: 0,
                    top: 6,
                    left: -52,
                    repeat: -1
                });
            } else if (j == 3) {
                randomNumber = (Math.random() * (4.00 - 1.00) + 1.00).toFixed(2);
                panelSouth = panelsSouth[j];
                TweenMax.to(panelSouth, randomNumber, {
                    opacity: 0,
                    top: -21,
                    left: -82,
                    repeat: -1
                });
            } else if (j == 4) {
                randomNumber = (Math.random() * (4.00 - 1.00) + 1.00).toFixed(2);
                panelSouth = panelsSouth[j];
                TweenMax.to(panelSouth, randomNumber, {
                    opacity: 0,
                    top: 4,
                    left: -126,
                    repeat: -1
                });
            } else if (j == 5) {
                randomNumber = (Math.random() * (4.00 - 1.00) + 1.00).toFixed(2);
                panelSouth = panelsSouth[j];
                TweenMax.to(panelSouth, randomNumber, {
                    opacity: 0,
                    top: -21,
                    left: -83,
                    repeat: -1
                });
            } else {
                randomNumber = (Math.random() * (4.00 - 1.00) + 1.00).toFixed(2);
                panelSouth = panelsSouth[j];
                TweenMax.to(panelSouth, randomNumber, {
                    opacity: 0,
                    top: -42,
                    left: -62,
                    repeat: -1
                });
                break
            }
            
            
        } //for
        
        
    } //digitalServiceLoop
    function databaseLoop(){
        var dbSouth = document.getElementsByClassName('digital--south')[0].children[3].children;
        var dbNorth = document.getElementsByClassName('digital-circuit')[0].children[2].children;
        console.log(dbNorth);
        // dbsouth
        TweenMax.to(dbSouth[1], 3, {
            opacity: 1,
            top: 0,
            repeat: -1
        });
        TweenMax.to(dbSouth[2], 3, {
            opacity: 1,
            top: 0,
            repeat: -1
        });
        TweenMax.to(dbSouth[3], 0.66, {
            opacity: 0,
            repeat: -1
        });
        // dbnorth
        TweenMax.to(dbNorth[1], 3, {
            opacity: 1,
            top: 0,
            repeat: -1
        });
        TweenMax.to(dbNorth[2], 0.66, {
            opacity: 1,
            repeat: -1
        });
        
    }
    
    function ecommerceLoop() {
        var ecomNorth = document.getElementsByClassName('ecommerce')[0].children;
        var ecomSouth = document.getElementsByClassName('animblock__item--city-south')[0].children[4].children;
        console.log(ecomSouth);
        randomNumber1 = (Math.random() * (4.00 - 1.00) + 1.00).toFixed(2);
        randomNumber2 = (Math.random() * (4.00 - 1.00) + 1.00).toFixed(2);
        randomNumber3 = (Math.random() * (4.00 - 1.00) + 1.00).toFixed(2);
        // ecomNorth
        // coins
        TweenMax.to(ecomNorth[2].children[1], 0.30, {
            top: -5,
            repeat: -1
        });
        TweenMax.to(ecomNorth[2].children[2], 0.75, {
            top: -6,
            repeat: -1
        });
        TweenMax.to(ecomNorth[2].children[3], 1, {
            top: -7,
            repeat: -1
        });
        // clothes
        TweenMax.to(ecomNorth[3].children[0], randomNumber1, {
            opacity: 0,
            repeat: -1
        });
        TweenMax.to(ecomNorth[3].children[1], randomNumber2, {
            opacity: 0,
            repeat: -1
        });
        TweenMax.to(ecomNorth[3].children[2], randomNumber3, {
            opacity: 0,
            repeat: -1
        });
        // woman
        TweenMax.to(ecomNorth[4].children[2], 5, {
            rotate: 1,
            left: 1,
            repeat: -1
        });
        TweenMax.to(ecomNorth[4].children[3], 5, {
            rotate: 1,
            left: 1,
            repeat: -1
        });
        TweenMax.to(ecomNorth[4].children[4], 5, {
            rotate: 1,
            left: 1,
            repeat: -1
        });
        TweenMax.to(ecomNorth[4].children[5], 5, {
            rotate: 1,
            left: 1,
            repeat: -1
        });
        TweenMax.to(ecomNorth[4].children[6], 5, {
            left: -1,
            repeat: -1
        });
        // man
        TweenMax.to(ecomNorth[5].children[0], 2, {
            left: -1,
            top:0,
            repeat: -1
        });
        TweenMax.to(ecomNorth[5].children[1], 4, {
            left: 1,
            top:0,
            repeat: -1
        });
        TweenMax.to(ecomNorth[5].children[2], 3, {
            left: -2,
            top:0,
            repeat: -1
        });
        // ecomSouth
        //card
        TweenMax.to(ecomSouth[1], 15, {
            opacity:0,
            left: 0,
            top:0,
            repeat: -1,
            yoyo: true
        });
        //clothes
        TweenMax.to(ecomSouth[2].children[1], randomNumber2, {
            opacity:0,
            repeat: -1
        });
        TweenMax.to(ecomSouth[2].children[2], randomNumber1, {
            opacity:0,
            repeat: -1
        });
        TweenMax.to(ecomSouth[2].children[3], randomNumber3, {
            opacity:0,
            repeat: -1
        });
        // woman
        TweenMax.to(ecomSouth[3].children[3], randomNumber3, {
            left:1,
            repeat: -1
        });
        TweenMax.to(ecomSouth[3], 5, {
            top:5,
            left:-15,
            repeat: -1,
            yoyo: true
        });
        TweenMax.to(ecomSouth[3].children[4], randomNumber3, {
            left:1,
            repeat: -1
        });
        TweenMax.to(ecomSouth[3].children[5], randomNumber3, {
            left:1,
            repeat: -1
        });
        TweenMax.to(ecomSouth[3].children[7], randomNumber3, {
            left:-1,
            repeat: -1
        });
        TweenMax.to(ecomSouth[3].children[8], randomNumber2, {
            left:1,
            repeat: -1
        });
        
    }
    function warehouseLoop() {
        var warehouseNorth = document.getElementsByClassName('warehouse')[0];
        var fenwickNorth = document.getElementsByClassName('fenwick');
        var storageWorkerSouth = document.getElementsByClassName('storage-worker');
        // console.log(storageWorkerSouth[0]);
        // Woman
        TweenMax.to(warehouseNorth.children[0], 5, {
            left: 5,
            top: 7,
            repeat: -1,
            yoyo: true
        });
        TweenMax.to(warehouseNorth.children[0].children[0], 3, {
            left: -1,
            repeat: -1
        });
        TweenMax.to(warehouseNorth.children[0].children[3], 2, {
            left: 1,
            repeat: -1
        });
        TweenMax.to(warehouseNorth.children[0].children[4], 4, {
            left: 1,
            repeat: -1
        });
        TweenMax.to(warehouseNorth.children[0].children[5], 3, {
            left: 1,
            repeat: -1
        });
        TweenMax.to(warehouseNorth.children[0].children[6], 3, {
            left: 1,
            repeat: -1
        });
        TweenMax.to(warehouseNorth.children[0].children[7], 3, {
            left: -1,
            repeat: -1
        });
        TweenMax.to(warehouseNorth.children[0].children[8], 3, {
            left: -1,
            repeat: -1
        });
        TweenMax.to(warehouseNorth.children[0].children[9], 3, {
            left: -1,
            repeat: -1
        });
        // clothes
        TweenMax.to(warehouseNorth.children[1].children[0], 0.2, {
            left: 1,
            repeat: -1,
            yoyo: true
        });
        TweenMax.to(warehouseNorth.children[1].children[1], 8, {
            opacity: 0,
            repeat: -1
        });
        TweenMax.to(warehouseNorth.children[1].children[2], 4, {
            opacity: 0,
            repeat: -1,
            yoyo: true
        });
        TweenMax.to(warehouseNorth.children[1].children[3], 0.21, {
            left: -1,
            repeat: -1,
            yoyo: true
        });
        TweenMax.to(warehouseNorth.children[1].children[4], 6, {
            opacity: 0,
            repeat: -1
        });
        TweenMax.to(warehouseNorth.children[1].children[5], 3, {
            opacity: 0,
            repeat: -1,
            yoyo: true
        });
        // fenswick
        TweenMax.to(fenwickNorth[0], 4, {
            top: 138,
            left: 242,
            repeat: -1,
            yoyo: true
        });
        TweenMax.to(fenwickNorth[0].children[0], 0.01, {
            top:1,
            repeat: -1,
            yoyo: true
        });
        TweenMax.to(fenwickNorth[0].children[1], 0.01, {
            top:1,
            repeat: -1,
            yoyo: true
        });
        // storage worker south
        TweenMax.to(storageWorkerSouth[0].children[0], 10, {
            top: 25,
            left: -20,
            repeat: -1,
            yoyo: true
        });
        TweenMax.to(storageWorkerSouth[0].children[0].children[1], 1, {
            top: 1,
            left: 0,
            repeat: -1,
            yoyo: true
        });
        TweenMax.to(storageWorkerSouth[0].children[0].children[5], 1, {
            top: 1,
            left: 0,
            repeat: -1,
            yoyo: true
        });
    }
    function digitalWorkers() {
        // man north
        var digitalManNorth = document.getElementsByClassName('digital-circuit__man');
        var digitalManSouth = document.getElementsByClassName('digital--south');
        var helpdeskSouth = document.getElementsByClassName('helpdesk');
        console.log(helpdeskSouth[0].children[0].children[1]); 
        TweenMax.to(digitalManNorth[0].children[1], 1, {
            left: -1,
            repeat: -1,
            yoyo: true
        });
        TweenMax.to(digitalManNorth[0].children[2], 1, {
            left: -1,
            repeat: -1,
            yoyo: true
        });
        TweenMax.to(digitalManNorth[0].children[3], 3, {
            left: -1,
            repeat: -1,
            yoyo: true
        });
        //man south
        // 3 4
        TweenMax.to(digitalManSouth[0].children[0].children[3], 2, {
            opacity:0,
            left: 20,
            top: -20,
            repeat: -1
        });
        TweenMax.to(digitalManSouth[0].children[0].children[4], 1.33, {
            opacity:0,
            left: 25,
            top: -20,
            repeat: -1
        });
        TweenMax.to(digitalManSouth[0].children[2].children[2], 3.33, {
            left: 1,
            repeat: -1
        });
        TweenMax.to(digitalManSouth[0].children[2].children[3], 3.33, {
            left: 1,
            repeat: -1
        });
        TweenMax.to(digitalManSouth[0].children[2].children[6], 1.33, {
            top: 1,
            left: -1,
            repeat: -1
        });
        // woman south helpdesk
        TweenMax.to(helpdeskSouth[0].children[0].children[2], 2, {
            opacity:0,
            left: -1,
            repeat: -1,
            yoyo: true
        });
        TweenMax.to(helpdeskSouth[0].children[1].children[2], 1.33, {
            left: -1,
            top:-1,
            repeat: -1,
            yoyo: true
        });
        TweenMax.to(helpdeskSouth[0].children[1].children[3], 2, {
            left: -1,
            top:1,
            repeat: -1,
            yoyo: true
        });
        TweenMax.to(helpdeskSouth[0].children[1].children[4], 2, {
            left: -1,
            top:1,
            repeat: -1,
            yoyo: true
        });
    }
    -------------------------------- COMMENT TO DELETE */
    /* -------------------------------- COMMENT TO DELETE 
    smallPanel();
    mediumPanel();
    bigPanel();
    hugePanel();
    binaryCodePanel();
    //
    planeLoop();
    truckLoop();
    signLoop();
    northFactoryLoop();
    southFactoryLoop();
    digitalServiceLoop();
    databaseLoop();
    ecommerceLoop();
    warehouseLoop();
    //
    digitalWorkers();
    -------------------------------- COMMENT TO DELETE */
});