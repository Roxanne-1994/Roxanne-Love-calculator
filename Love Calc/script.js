function calculateLove() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();
  
    if (name1 === "" || name2 === "") {
      document.getElementById("result").textContent = "Please enter both names!";
      return;
    }
  
    // Fun formula: total character codes % 100
    const total = name1.length + name2.length + 
                  Array.from(name1 + name2).reduce((sum, char) => sum + char.charCodeAt(0), 0);
  
    const lovePercent = total % 101; // Max 100%
    document.getElementById("result").textContent = 
      `${name1} ❤️ ${name2} = ${lovePercent}% compatible!`;
  }
  