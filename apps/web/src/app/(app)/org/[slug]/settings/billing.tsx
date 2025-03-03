import { getCurrentOrg } from '@/auth/auth'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { getBilling } from '@/http/get-billing'
import { formatCurrency } from '@/lib/formatCurrency'

export async function Billing() {
  const currentOrg = await getCurrentOrg()
  const { billing } = await getBilling(currentOrg!)

  return (
    <>
      <Separator />
      <Card>
        <CardHeader>
          <CardTitle>Billing</CardTitle>
          <CardDescription>
            Informations about your organization costs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Cost type</TableHead>
                <TableHead className="text-right" style={{ width: 120 }}>
                  Quantity
                </TableHead>
                <TableHead className="text-right" style={{ width: 200 }}>
                  Subtotal
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Amout of projects</TableCell>
                <TableCell className="text-right">
                  {billing.projects.amount}
                </TableCell>
                <TableCell className="text-right">
                  {formatCurrency(billing.projects.price)}(
                  {formatCurrency(billing.projects.unit)} each)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Amout of seats</TableCell>
                <TableCell className="text-right">
                  {billing.seats.amount}
                </TableCell>
                <TableCell className="text-right">
                  {formatCurrency(billing.seats.price)} ({billing.seats.unit}{' '}
                  each)
                </TableCell>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell />
                <TableCell className="text-right">Total</TableCell>
                <TableCell className="text-right">
                  {formatCurrency(billing.total)}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </CardContent>
      </Card>
    </>
  )
}
