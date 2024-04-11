import React from "react";

// export const getCurrentHash = () => {
//   return window.location.hash.replace("#/", "").replace("#", "");

// }
// export const navigate = (path) => {
//     window.location.hash = '#/'+path
// }


// export const useNavigation = () => {
//     const[url, setState] = React.useState(getCurrentHash())
//     window.addEventListener('hashchange' , function (e) {
       
//         const path = getCurrentHash()
//         setState(path)
//     } )
//     return {url, navigate}
// }

// export default getCurrentHash;


export const getCurrentHash = () => {
  return window.location.hash.replace("#/", "").replace("#", "");
};

export const navigate = (path) => {
  window.location.hash = '#/' + path;
};

export const useNavigation = () => {
  const [url, setState] = React.useState(getCurrentHash());
  
  React.useEffect(() => {
    const handleHashChange = () => {
      setState(getCurrentHash());
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return { url, navigate };
};

export default useNavigation;
