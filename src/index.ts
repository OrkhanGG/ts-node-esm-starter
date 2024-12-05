type anExampleType = "type1" | "type2" | "type3";
interface anExampleInterface {
    type: anExampleType;
    value: string;
}
const anExampleObject: anExampleInterface = {
    type: "type1",
    value: "This is an example value"
};
console.log(anExampleObject);
console.log("The typescript code has been executed successfully!");

export const handler = async (event: any) => {
    console.log(event);
    // TODO implement test 1
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from a TypeScript-generated Lambda function!'),
    };
    return response;
};
