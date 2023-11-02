import { ApolloError } from '@apollo/client';

type ShowErrorJsonProps = { error: ApolloError };

// @deprecated
export function ErrorJsonViewer({ error }: ShowErrorJsonProps) {
  return (
    <pre role={'alert'}>
      {error.graphQLErrors.map((error) => JSON.stringify(error, null, 4))}
    </pre>
  );
}
