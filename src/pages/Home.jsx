import { Typography } from "@mui/material";
import Item from "../components/Item";
import { useApp } from "../AppProvider";
import Form from "../components/Form";
import { useMutation, useQuery, useQueryClient } from "react-query";

const api = "http://localhost:8000/posts";

async function fetchPosts() {
	const res = await fetch(api);

	return res.json();
}

async function deletePost(id) {

	const token = localStorage.getItem("token");

	const res = await fetch(`${api}/${id}`, {
		method: "DELETE",
		headers: {
			Authorization: `Bearer ${token}`,
		}
	})

	return res.json();
}

export default function Home() {
	const { data, error, isLoading } = useQuery("posts", fetchPosts);
	const queryClient = useQueryClient();

	const {auth, showForm } = useApp();

	const remove = useMutation(deletePost, {
		onMutate: id => {
			queryClient.setQueryData("posts", old => {
				return old.filter(post => {
					return post.id != id;
				})
			})
		},

		// onSuccess: async () => {
		// 	await queryClient.cancelQueries();
		// 	await queryClient.invalidateQueries("posts");
		// }
	})

	if(error) {
		return <Typography>{error}</Typography>
	}

	if(isLoading) {
		return <Typography>Loading...</Typography>;
	}

    return (
		<>
			{ auth && showForm && <Form /> }

			{data.map(post => {
				return (
					<Item 
						key={post.id}
						post={post}
						remove={remove.mutate}
					/>
				)
			})}
		</>
	);
}
