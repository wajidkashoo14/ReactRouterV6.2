
import { Link, useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData()
//   const [data, setData] = useState([]);

//   useEffect(() => {
//   const result = () => {  
//     return fetch("https://api.github.com/users/wajidkashoo14")
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }
//       result()
//   }, []);
  return (
    <div className="text-center text-3xl mb-10">
      <h2 className="my-4">{data?.name}</h2>
      <div className="flex items-center justify-around gap-16">
        <img
          src={data?.avatar_url}
          style={{ width: "200px", height: "200px", borderRadius: "50%" }}
        />
        <div>
          <h3 className="text-green-600">Repositories</h3>
          <span>{data?.public_repos}</span>
        </div>
        <div>
          <h3 className="text-blue-600">Followers</h3>
          <span>{data?.followers}</span>
        </div>

        <div>
          <div>
            <h3 className="text-orange-600">Following</h3>
            <span>{data?.following}</span>
          </div>
        </div>
      </div>
      <Link to="https://github.com/wajidkashoo14" target="_blank">
      <button className="p-3 text-lg outline-none text-white bg-green-600 rounded-md">View my profile</button>
      </Link>
    </div>
  );
}

export default Github;

// eslint-disable-next-line react-refresh/only-export-components
export const gitHubInfoLoader = async () => {
 const response = await fetch("https://api.github.com/users/wajidkashoo14")
    return response.json()
}


