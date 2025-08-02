function n(t){if(t.startsWith("http")||t.startsWith("https")||t.startsWith("./"))return t;const s="./",r=t.startsWith("/")?t.substring(1):t;return`${s}${r}`}export{n as g};
