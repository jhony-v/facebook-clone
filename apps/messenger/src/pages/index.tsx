import { Flex, Spinner } from "@chakra-ui/react"
import { lazy, Suspense } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Dashboard from "../sections/Dashboard"
import NotFound from "./NotFound"

const Index = lazy(() => import("./Index/index"))
const People = lazy(() => import("./People"))
const Marketplace = lazy(() => import("./Marketplace"))
const Archived = lazy(() => import("./Archived"))
const Requests = lazy(() => import("./Requests"))
const Login = lazy(() => import("./Login"))

const El = ({
  component: Component,
}: {
  component: React.JSXElementConstructor<{}>
}) => {
  return (
    <Suspense
      fallback={
        <Flex justifyContent={"center"} alignItems="center" width="100%">
          <Spinner />
        </Flex>
      }
    >
      <Component />
    </Suspense>
  )
}

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Navigate replace to="/t" />} />
          <Route path="/t" element={<El component={Index} />} />
          <Route path="/t/:profileId" element={<El component={Index} />} />
          <Route
            path="active/t/:profileId"
            element={<El component={People} />}
          />
          <Route
            path="marketplace/t/:profileId"
            element={<El component={Marketplace} />}
          />
          <Route
            path="requests/t/:profileId"
            element={<El component={Requests} />}
          />
          <Route
            path="archived/t/:profileId"
            element={<El component={Archived} />}
          />
        </Route>
        <Route path="/login" element={<El component={Login} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Pages
