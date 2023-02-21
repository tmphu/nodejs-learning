const { buildSchema } = require('graphql');

// define objects
const graphqlSchema = buildSchema(`
    type User {
        id: ID
        hoTen: String
        tuoiTac: Int
        email: String
    }

    type Food {
        food_id: ID
        food_name: String
        image: String
        price: Int
        desc: String
        type_id: Int
        food_type: FoodType
    }

    type FoodType {
        type_id: ID
        type_name: String
    }

    type RootQuery {
        LayNguoiDung: [User]
        getFood: [Food]
    }

    type RootMutation {
        ThemNguoiDung(maNguoiDung: Int, hoTen: String): [String]
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);

module.exports = graphqlSchema;
