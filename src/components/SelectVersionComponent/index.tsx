'use client'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useQueryState } from "nuqs";

const uuidVersions = ['v1', 'v4', 'v6', 'v7', 'NIL'];




export const SelectVersionComponent = ()=> {
  const [version, setVersion] = useQueryState("version")
  
  return (
    <Select value={version ?? 'v4'} onValueChange={(value) => {
      setVersion(value)
    }}>
      <SelectTrigger className=" w-auto space-x-2 bg-blue-950 mx-2 text-white">
        <SelectValue placeholder="Select UUID version" />
      </SelectTrigger>
      <SelectContent>
        {uuidVersions.map((value)=> (
        <SelectItem key={value} value={value}>{value}</SelectItem>
        ))}
      </SelectContent>
    </Select>

  )
}
