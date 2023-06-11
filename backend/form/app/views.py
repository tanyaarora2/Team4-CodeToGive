from django.shortcuts import render
from rest_framework.views import APIView
from .models import *
from .serializer import *
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view


class CaseReactView(APIView):
    serializer_class = CaseReactSerializer
    http_methods_name = ['GET', 'POST', 'PATCH']
    lookup_field = 'Case_Number'

    def get(self, request):
        output = [{'Case_Number': output.Case_Number, 'State': output.State,
                   'District': output.District, 'Shelter_Home': output.Shelter_Home,
                   'Child_Name': output.Child_Name, 'Gender': output.Gender,
                   'DOB': output.DOB, 'Age': output.Age,
                   'Child_Classification': output.Child_Classification,
                   'Reason_Admission': output.Reason_Admission,
                   'Reason_Flagging': output.Reason_Flagging, 'Last_Visit': output.Last_Visit,
                   'Last_Call': output.Last_Call,
                   'Guardian': output.Guardian, 'Sibling': output.Sibling,
                   'Shelter_Stay': output.Shelter_Stay, 'CWC_Last_Review': output.CWC_Last_Review,
                   'CWC_Last_Order': output.CWC_Last_Order, 'Case_History': output.Case_History,
                   'Newspaper_Date': output.Newspaper_Date, 'Police_Date': output.Police_Date,
                   'Surrender_Date': output.Surrender_Date, 'Assigned_To': output.Assigned_To,
                   'Action': output.Action, 'Action_Problem': output.Action_Problem,
                   'Action_Solution': output.Action_Solution, 'Completed': output.Completed,
                   'Progress': output.Progress,
                   }
                  for output in Case.objects.all()]
        return Response(output)

    def post(self, request, caseNumber=None, format=None):
        if caseNumber:
            try:
                case = Case.objects.get(Case_Number=caseNumber)
            except Case.DoesNotExist:
                return Response({'error': 'Case not found'}, status=status.HTTP_404_NOT_FOUND)
            if case.Case_Number == "KVB-04":
                case.Action_Problem = "Shall I proceed with the formalities despite the child's reluctance or shall we get him uploaded to CARINGS instead?"
                case.Action = True
            if case.Assigned_To == "None":
                case.Assigned_To = "Aarav Pate"
            elif case.Assigned_To != "None":
                case.Completed = True

            case.save()

            return Response({'message': 'Case updated successfully'}, status=status.HTTP_200_OK)

        else:
            serializer = CaseReactSerializer(data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data)

    @staticmethod
    @api_view(['PATCH'])
    def partial_update(self, request, Case_Number):
        try:
            case = Case.objects.get(Case_Number=Case_Number)
        except Case.DoesNotExist:
            return Response({'error': 'Case not found'}, status=status.HTTP_404_NOT_FOUND)

        serializer = CaseReactSerializer(case, data=request.data, partial=True)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SWReactView(APIView):
    serializer_class = SWReactSerializer

    def get(self, request):
        output2 = [{'Name': output2.Name, 'SW_Age': output2.SW_Age,
                   'Address': output2.Address, 'Active_Cases': output2.Active_Cases,
                    'Solved_Cases': output2.Solved_Cases, }
                   for output2 in Social_Worker.objects.all()]
        return Response(output2)

    def post(self, request):
        serializer = SWReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
