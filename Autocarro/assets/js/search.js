            function Search() {
                var inputText, list, a, txtValue;
                inputText = document.getElementById("input-box");
                inputText = inputText.value.toUpperCase();
                list = document.getElementById("main");
                list = list.getElementsByClassName("thumb");
                for (i = 0; i < list.length; i++) {
                    a = list[i].getElementsByTagName("h2")[0];
                    txtValue = a.textContent || a.innerText;
                    if (txtValue.toUpperCase().indexOf(inputText) > -1) {
                        list[i].style.display = "";
                    }
                    else {
                        list[i].style.display = "none";
                    }
                }
            }