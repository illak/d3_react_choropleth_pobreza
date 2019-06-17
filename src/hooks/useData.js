import { useState, useEffect } from "react";
import * as d3 from "d3";

const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    var promises = [
      d3.json(
        "https://raw.githubusercontent.com/" +
          "illak/data_for_test/master/data_json/argentina-provinces.json"
      ),
      d3.json(
        "https://raw.githubusercontent.com/" +
          "illak/data_for_test/master/data_json/pobreza_arg.json"
      )
    ];

    Promise.all(promises)
      .then(function(data) {
        const pov = d3.map();

        const groupData = d3
          .nest()
          .key(d => d.id)
          .entries(data[1]);

        groupData.forEach(d => pov.set(d.key, d.values));

        setData([data[0], pov, data[1]]);
      })
      .catch(function(error) {
        console.log(error);
        throw error;
      });
  }, []);

  return data;
};

export default useData;
