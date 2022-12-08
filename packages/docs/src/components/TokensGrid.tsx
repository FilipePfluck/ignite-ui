import '../styles/tokens-grid.css'

interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
}

export const TokensGrid = ({ tokens, hasRemValue }: TokensGridProps) => {
  return (
    <table className="tokens-grid">
      <thead>
        <th>Nome</th>
        <th>Valor</th>
        {hasRemValue && <th>Pixels</th>}
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              {hasRemValue && (
                <td>{Number(value.replace('rem', '')) * 16}px</td>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
