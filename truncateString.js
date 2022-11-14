function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const data = await axios.get("https://api.twitter.com");
//       setData(data.data);
//     } catch (error) {}
//   };
//   fetchData();
// }, []);
