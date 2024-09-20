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
