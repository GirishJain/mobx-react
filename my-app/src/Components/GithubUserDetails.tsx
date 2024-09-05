import { observer } from "mobx-react-lite";
import { useStore } from "../Hooks/useStore";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";

export const GithubUserDetails = observer(() => {
    const { rootStore: { githubUserDetails, countStore } } = useStore();

    const [text, setText] = useState("")

    const onClickButton = () => {
        githubUserDetails.fetchGithubUserDetails(text)
    }

    return (
        <div>
            <div>
                User Name: {githubUserDetails.getUserDetails?.name} <br />
                Location: {githubUserDetails.getUserDetails?.location} <br />
                Count value in Github component: {countStore?.getCountValue}
            </div>
            <Form>
                <Form.Group className="mb-3" controlId="githubuser">
                    <Form.Label>Search Github User</Form.Label>
                    <Form.Control value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter github user name" />
                </Form.Group>
                <Button onClick={onClickButton} variant="primary">
                    Search
                </Button>
            </Form>
        </div>
    );

})