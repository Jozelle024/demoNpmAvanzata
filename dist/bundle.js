function caricaData(){setTimeout(function(){moment.locale("it");var e=moment(),n=e.add(30,"days");console.log(e);var o=moment.unix(1485762037),t=o.format("h:mm:ss"),a=o.format("LLL"),d=o.format("LLLL"),m=n.format("LLLL");addP("sezione",t),addP("sezione",a),addP("sezione",d),addP("sezione",m)},1e3),document.getElementById("btnShow").addEventListener("click",function(){for(var e=0;e<50;e++)addTagh(e)})}function addP(e,n){var o=document.createElement("p"),t=document.getElementById(e);o.innerText=n,t.appendChild(o)}function addTagh(e){var n=document.createElement("h1"),o=document.getElementById("sezione2");n.innerText=e,n.style.backgroundColor="pink",o.append(n)}function somma(e,n){return e+n}function differenza(e,n){return e-n}console.log(somma(5,6)),console.log(differenza(2,4));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyIsInNjcmlwdDEuanMiLCJzY3JpcHQyLmpzIl0sIm5hbWVzIjpbImNhcmljYURhdGEiLCJzZXRUaW1lb3V0IiwibW9tZW50IiwibG9jYWxlIiwib2dnaSIsInNjYWRlbnphIiwiYWRkIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJ1bml4IiwiZGF0YWVzdGVzYSIsImZvcm1hdCIsImRhdGFpbnRlcmEiLCJkYXRhc2V0dGltYW5hIiwiZGF0YXNjYWRlbnphIiwiYWRkUCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiaSIsImFkZFRhZ2giLCJpZCIsImNvbnRlbnQiLCJwIiwiY3JlYXRlRWxlbWVudCIsImgxIiwiaW5uZXJUZXh0IiwiYXBwZW5kQ2hpbGQiLCJudW0iLCJjb250ZW5pdG9yZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiYXBwZW5kIiwic29tbWEiLCJhIiwiYiIsImRpZmZlcmVuemEiXSwibWFwcGluZ3MiOiJBQUFBLFNBQUFBLGFBRUFDLFdBQUEsV0FFQUMsT0FBQUMsT0FBQSxNQUVBLElBQ0FDLEVBQUFGLFNBQ0FHLEVBQUFELEVBQUFFLElBQUEsR0FBQSxRQUNBQyxRQUFBQyxJQUFBSixHQUNBLElBQUFLLEVBQUFQLE9BQUFRLEtBSkEsWUFNQUMsRUFBQUYsRUFBQUcsT0FBQSxXQUNBQyxFQUFBSixFQUFBRyxPQUFBLE9BQ0FFLEVBQUFMLEVBQUFHLE9BQUEsUUFDQUcsRUFBQVYsRUFBQU8sT0FBQSxRQW9CQUksS0FBQSxVQUFBTCxHQUNBSyxLQUFBLFVBQUFILEdBQ0FHLEtBQUEsVUFBQUYsR0FDQUUsS0FBQSxVQUFBRCxJQUVBLEtBRUFFLFNBQUFDLGVBQUEsV0FDQUMsaUJBQUEsUUFBQSxXQUVBLElBQUEsSUFBQUMsRUFBQSxFQUFBQSxFQUFBLEdBQUFBLElBQ0FDLFFBQUFELEtBTUEsU0FBQUosS0FBQU0sRUFBQUMsR0FDQSxJQUFBQyxFQUFBUCxTQUFBUSxjQUFBLEtBQ0FDLEVBQUFULFNBQUFDLGVBQUFJLEdBQ0FFLEVBQUFHLFVBQUFKLEVBQ0FHLEVBQUFFLFlBQUFKLEdBR0EsU0FBQUgsUUFBQVEsR0FDQSxJQUFBSCxFQUFBVCxTQUFBUSxjQUFBLE1BQ0FLLEVBQUFiLFNBQUFDLGVBQUEsWUFDQVEsRUFBQUMsVUFBQUUsRUFDQUgsRUFBQUssTUFBQUMsZ0JBQUEsT0FDQUYsRUFBQUcsT0FBQVAsR0M5REEsU0FBQVEsTUFBQUMsRUFBQUMsR0FDQSxPQUFBRCxFQUFBQyxFQ0FBLFNBQUFDLFdBQUFGLEVBQUFDLEdBQ0EsT0FBQUQsRUFBQUMsRURKQTdCLFFBQUFDLElBQUEwQixNQUFBLEVBQUEsSUNBQTNCLFFBQUFDLElBQUE2QixXQUFBLEVBQUEiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY2FyaWNhRGF0YSgpIHtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIG1vbWVudC5sb2NhbGUoJ2l0Jyk7XG5cbiAgICAgICAgdmFyIHN1bnJpc2UgPSAxNDg1NzYyMDM3OyAvLyBob3VyIG9mIHN1bnJpc2UgaW4ganNvbiBvcGVud2VhdGhlcm1hcFxuICAgICAgICB2YXIgb2dnaSA9IG1vbWVudCgpOyAvLyBkYXRlIG9mIHRvZGF5IFxuICAgICAgICB2YXIgc2NhZGVuemEgPSBvZ2dpLmFkZCgzMCwgJ2RheXMnKTtcbiAgICAgICAgY29uc29sZS5sb2cob2dnaSk7XG4gICAgICAgIHZhciBkYXRhID0gbW9tZW50LnVuaXgoc3VucmlzZSk7XG5cbiAgICAgICAgdmFyIGRhdGFlc3Rlc2EgPSBkYXRhLmZvcm1hdCgnaDptbTpzcycpOyAvLy5mb3JtYXQgY2hhbmdlIHRoZSBmb3JtYXQgaW4gdGhlIGZvbGxvd2luZyAoKVxuICAgICAgICB2YXIgZGF0YWludGVyYSA9IGRhdGEuZm9ybWF0KCdMTEwnKTtcbiAgICAgICAgdmFyIGRhdGFzZXR0aW1hbmEgPSBkYXRhLmZvcm1hdCgnTExMTCcpXG4gICAgICAgIHZhciBkYXRhc2NhZGVuemEgPSBzY2FkZW56YS5mb3JtYXQoJ0xMTEwnKTtcblxuICAgICAgICAvKlxuICAgICAgICB2YXIgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdmFyIHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB2YXIgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHZhciBwNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgICBwLmlubmVyVGV4dCA9IGRhdGFlc3Rlc2E7XG4gICAgICAgIHAxLmlubmVyVGV4dCA9IGRhdGFpbnRlcmE7XG4gICAgICAgIHAzLmlubmVyVGV4dCA9IGRhdGFzZXR0aW1hbmE7XG4gICAgICAgIHA0LmlubmVyVGV4dCA9IGRhdGFzY2FkZW56YTtcblxuICAgICAgICB2YXIgaDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V6aW9uZScpO1xuXG4gICAgICAgIGgxLmFwcGVuZENoaWxkKHApO1xuICAgICAgICBoMS5hcHBlbmRDaGlsZChwMSk7XG4gICAgICAgIGgxLmFwcGVuZENoaWxkKHAzKTtcbiAgICAgICAgaDEuYXBwZW5kQ2hpbGQocDQpO1xuICAgICAgICAqL1xuICAgICAgICBhZGRQKCdzZXppb25lJywgZGF0YWVzdGVzYSk7XG4gICAgICAgIGFkZFAoJ3NlemlvbmUnLCBkYXRhaW50ZXJhKTtcbiAgICAgICAgYWRkUCgnc2V6aW9uZScsIGRhdGFzZXR0aW1hbmEpO1xuICAgICAgICBhZGRQKCdzZXppb25lJywgZGF0YXNjYWRlbnphKTtcblxuICAgIH0sIDEwMDApXG5cbiAgICB2YXIgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0blNob3cnKTtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA1MDsgaSsrKSB7XG4gICAgICAgICAgICBhZGRUYWdoKGkpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbn07XG5cbmZ1bmN0aW9uIGFkZFAoaWQsIGNvbnRlbnQpIHtcbiAgICB2YXIgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB2YXIgaDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgcC5pbm5lclRleHQgPSBjb250ZW50O1xuICAgIGgxLmFwcGVuZENoaWxkKHApO1xufVxuXG5mdW5jdGlvbiBhZGRUYWdoKG51bSkge1xuICAgIHZhciBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdmFyIGNvbnRlbml0b3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlemlvbmUyJyk7XG4gICAgaDEuaW5uZXJUZXh0ID0gbnVtO1xuICAgIGgxLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdwaW5rJztcbiAgICBjb250ZW5pdG9yZS5hcHBlbmQoaDEpO1xuXG59IiwiY29uc29sZS5sb2coc29tbWEoNSw2KSk7XG5cbmZ1bmN0aW9uIHNvbW1hIChhLGIpe1xuICAgIHJldHVybiBhICsgYjtcbn0iLCJjb25zb2xlLmxvZyhkaWZmZXJlbnphKDIsNCkpO1xuXG5cbmZ1bmN0aW9uIGRpZmZlcmVuemEoYSxiKXtcbiAgICByZXR1cm4gYS1iO1xufSJdfQ==
