import { Officer } from "../data/types";
import Link from "@docusaurus/Link";

export default function OfficersTable(props: { data: Officer[] }) {
    const { data } = props;
    return (
        <table>
            <thead>
                <tr>
                    <th>Position</th>
                    <th>Name</th>
                    <th>Affiliation</th>
                    <th>Year</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {data.map((p, idx) => (
                    <tr key={idx}>
                        <td>{p.position}</td>
                        <td>{p.name}</td>
                        <td>{p.affiliation}</td>
                        <td>{p.year}</td>
                        <td>
                            <Link to={`mailto:${p.kerb}@mit.edu`}>
                                {p.kerb}@mit.edu
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
