from django.shortcuts import render
from rest_framework.views import APIView
from .models import *
from .serializer import *
from rest_framework.response import Response

# Create your views here.


class ReactView(APIView):
    serializer_class = ReactSerializer

    def get(self, request):

        output = [{'Case_Number': output.Case_Number, 'State': output.State,
                   'District': output.District, 'Shelter_Home': output.Shelter_Home,
                   'Child_Name': output.Child_Name, 'Gender': output.Gender,
                   'DOB': output.DOB, 'Age': output.Age,
                   'Reason_Admission': output.Reason_Admission,
                   'Reason_Flagging': output.Reason_Flagging, 'Last_Visit': output.Last_Visit,
                   'Last_Call': output.Last_Call,
                   'Guardian': output.Guardian, 'Sibling': output.Sibling,
                   'Shelter_Stay': output.Shelter_Stay, 'CWC_Last_Review': output.CWC_Last_Review,
                   'CWC_Last_Order': output.CWC_Last_Order, 'Case_History': output.Case_History,
                   'Newspaper_Date': output.Newspaper_Date, 'Police_Date': output.Police_Date,
                   'Surrender_Date': output.Surrender_Date,
                   }
                  for output in Case.objects.all()]
        return Response(output)

    def post(self, request):

        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
