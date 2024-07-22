import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";


const Todo = () => {
    return <>
        <br />
        <div className="flex-col">
            <div className="h-[200px]">
                <section className="flex w-[700px]" >
                    <Input className="w-[600px]" />
                    <Button className="ml-5">Add</Button>
                </section>
            </div>
            <Card className="w-[600px]">
                <CardTitle>Title</CardTitle>
                <CardContent>Test</CardContent>
            </Card>
            <br />
            <Card className="w-[600px]">
                <CardTitle>Title</CardTitle>
                <CardContent>Test</CardContent>
            </Card>
            <br />
            <Card className="w-[600px]">
                <CardTitle>Title</CardTitle>
                <CardContent>Test</CardContent>
            </Card>
            <br />
            <Card className="w-[600px]">
                <CardTitle>Title</CardTitle>
                <CardContent>Test</CardContent>
            </Card>

        </div>
    </>
}

export default Todo;