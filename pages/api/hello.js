// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const response = {
    test: 'hello',
    error: 'success'
  }

  res.status(400).json(response)
}
