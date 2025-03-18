import React, { useEffect } from "react";
import Home from "./pages/Home";
import $ from "jquery";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Touch from "./components/Touch";
import Counter from "./components/Counter";

function App() {
  useEffect(() => {
    $(".counting").each(function () {
      const $this = $(this);
      const countTo = $this.attr("data-count");
      $({ countNum: $this.text() }).animate(
        { countNum: countTo },
        {
          duration: 5000,
          easing: "linear",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          },
        }
      );
    });

    return () => {
      $(".counting").stop(); // Cleanup animation
    };
  }, []);

  useEffect(() => {
    const slideContainer = $(".slidem");
    if (!slideContainer.length) return;

    // Clone only once to avoid duplicate divs on re-render
    if (slideContainer.children().length === $(".slidem > div").length) {
      slideContainer.prepend($(".slidem > div:last").clone());
    }

    $.fn.slideFadeToggle = function (speed, easing, callback) {
      return this.animate(
        { opacity: "toggle", height: "toggle" },
        speed,
        easing,
        callback
      );
    };

    const divS = $(".slidem > div");
    const sDiv = divS.length;
    let n = 0;

    function slidethem() {
      $(divS)
        .eq(n)
        .slideFadeToggle(100, "swing", function () {
          n = (n + 1) % sDiv; // Ensure looping
          // Check if the next slide is the last one
          if (n === sDiv - 1) {
            $(divS).eq(n).fadeIn(100);
          } else {
            $(divS).eq(n).show();
          }
        });
    }

    // Maintain even timing for all slides
    const interval = setInterval(() => {
      slidethem();
    }, 2000);

    return () => {
      clearInterval(interval); // Cleanup interval on unmount
    };
  }, []);

  return (
    <>
      <Header />
      <Counter />
      <Services />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Touch />
      <Footer />
    </>
  );
}

export default App;
