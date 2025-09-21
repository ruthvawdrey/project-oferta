function runFizzBuzz(limit = 100) {
      const list = document.getElementById("fizzbuzz-list");
      list.innerHTML = ""; // clear previous results
      
      for (let i = 1; i <= limit; i++) {
        let text = "";
        let className = "";

        if (i % 3 === 0 && i % 5 === 0) {
          console.log("FizzBuzz")
        } else if (i % 3 === 0) {
          console.log("Fizz");
        } else if (i % 5 === 0) {
          console.log("Buzz");
        } else {
          console.log(i)
        }

        
      }
    }